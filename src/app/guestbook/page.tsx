"use client";

import { useEffect, useState, useCallback } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { MessageInput } from "@/components/sections/message-input";
import { MessageList } from "@/components/sections/message-list";
import { LoginButtons } from "@/components/sections/login-buttons";

interface MessageData {
  id: string;
  content: string;
  createdAt: string;
  user: { name: string | null; image: string | null; email: string | null };
  reactions: { id: string; emoji: string; userId: string }[];
  replies: MessageData[];
}

function GuestbookContent() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(async () => {
    const res = await fetch("/api/guestbook");
    const data = await res.json();
    setMessages(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-2">Buku Tamu</h1>
      <p className="text-muted-foreground mb-8">
        Jangan ragu untuk berbagi pemikiran, saran, pertanyaan, atau apa pun!
      </p>

      <hr className="border-dashed border-border mb-8" />

      {loading ? (
        <p className="text-center text-muted-foreground py-12">Memuat...</p>
      ) : (
        <MessageList messages={messages} onReact={fetchMessages} />
      )}

      <div className="mt-8">
        {session ? (
          <MessageInput onSent={fetchMessages} />
        ) : (
          <LoginButtons />
        )}
      </div>
    </section>
  );
}

export default function GuestbookPage() {
  return (
    <SessionProvider>
      <GuestbookContent />
    </SessionProvider>
  );
}