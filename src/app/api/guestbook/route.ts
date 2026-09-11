import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.message.findMany({
    where: { parentId: null },
    include: {
      user: true,
      reactions: true,
      replies: {
        include: { user: true, reactions: true },
        orderBy: { createdAt: "asc" },
      },
    },
    orderBy: [
      { isPinned: "desc" },
      { createdAt: "desc" },
    ],
  });

  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Silakan masuk terlebih dahulu." }, { status: 401 });
  }

  const body = await request.json();
  const { content, parentId } = body;

  if (!content || content.trim().length === 0) {
    return NextResponse.json({ error: "Pesan tidak boleh kosong." }, { status: 400 });
  }

  const message = await prisma.message.create({
    data: {
      content: content.trim(),
      userId: session.user.id,
      parentId: parentId || null,
    },
    include: { user: true, reactions: true },
  });

  return NextResponse.json(message);
}
export async function PATCH(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Silakan masuk terlebih dahulu." }, { status: 401 });
  }

  const body = await request.json();
  const { id, content, isPinned } = body;

  const message = await prisma.message.findUnique({ where: { id } });

  if (!message) {
    return NextResponse.json({ error: "Pesan tidak ditemukan." }, { status: 404 });
  }

  const isOwner = message.userId === session.user.id;
  const isAdmin = session.user.email?.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();

  // Edit isi pesan: hanya pemilik pesan
  if (content !== undefined) {
    if (!isOwner) {
      return NextResponse.json({ error: "Tidak diizinkan." }, { status: 403 });
    }
    const updated = await prisma.message.update({
      where: { id },
      data: { content: content.trim() },
      include: { user: true, reactions: true },
    });
    return NextResponse.json(updated);
  }

  if (isPinned !== undefined) {
    if (!isAdmin) {
      return NextResponse.json({ error: "Tidak diizinkan." }, { status: 403 });
    }
    const updated = await prisma.message.update({
      where: { id },
      data: { isPinned },
      include: { user: true, reactions: true },
    });
    return NextResponse.json(updated);
  }

  return NextResponse.json({ error: "Tidak ada perubahan." }, { status: 400 });
}

export async function DELETE(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Silakan masuk terlebih dahulu." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID pesan wajib diisi." }, { status: 400 });
  }

  const message = await prisma.message.findUnique({ where: { id } });

  if (!message) {
    return NextResponse.json({ error: "Pesan tidak ditemukan." }, { status: 404 });
  }

  const isOwner = message.userId === session.user.id;
  const isAdmin = session.user.email?.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();

  if (!isOwner && !isAdmin) {
    return NextResponse.json({ error: "Tidak diizinkan." }, { status: 403 });
  }

  await prisma.message.delete({ where: { id } });

  return NextResponse.json({ success: true });
}