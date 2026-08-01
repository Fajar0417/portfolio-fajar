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
    orderBy: { createdAt: "desc" },
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