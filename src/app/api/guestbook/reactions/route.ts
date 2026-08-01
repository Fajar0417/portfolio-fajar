import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Silakan masuk terlebih dahulu." }, { status: 401 });
  }

  const { messageId, emoji } = await request.json();

  const existing = await prisma.reaction.findUnique({
    where: {
      messageId_userId_emoji: {
        messageId,
        userId: session.user.id,
        emoji,
      },
    },
  });

  if (existing) {
    await prisma.reaction.delete({ where: { id: existing.id } });
    return NextResponse.json({ action: "removed" });
  }

  await prisma.reaction.create({
    data: {
      messageId,
      userId: session.user.id,
      emoji,
    },
  });

  return NextResponse.json({ action: "added" });
}