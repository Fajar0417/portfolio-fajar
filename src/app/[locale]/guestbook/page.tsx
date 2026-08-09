"use client";

import { useEffect, useState, useCallback } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import {
  BookText,
  MessageCircle,
  Loader2,
} from "lucide-react";

import { MessageInput } from "@/components/sections/message-input";
import { MessageList } from "@/components/sections/message-list";
import { LoginButtons } from "@/components/sections/login-buttons";

interface MessageData {
  id: string;
  content: string;
  createdAt: string;
  user: {
    name: string | null;
    image: string | null;
    email: string | null;
  };
  reactions: {
    id: string;
    emoji: string;
    userId: string;
  }[];
  replies: MessageData[];
}

function GuestbookContent() {
  const t = useTranslations("guestbook");
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
<section className="max-w-6xl mx-auto px-8 py-12">
      {/* ================= HEADER ================= */}

      <div className="mb-12 max-w-3xl">
      

        <h1 className="text-2xl font-bold mb-2">
          {t("title")}
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          {t("description")}
        </p>
      </div>

      
      {/* ================= MESSAGE LIST ================= */}

      <div className="rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="mb-4 size-8 animate-spin text-yellow-500" />

            <p className="text-muted-foreground">
              {t("loading")}
            </p>
          </div>
        ) : (
          <>
            <MessageList
              messages={messages}
              onReact={fetchMessages}
            />

            {messages.length === 0 && (
              <div className="py-20 text-center">
                <MessageCircle className="mx-auto mb-4 size-12 text-muted-foreground/40" />

                <p className="text-muted-foreground">
                  {t("empty")}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* ================= INPUT ================= */}

      <div className="mt-8 rounded-3xl border border-border bg-card/80 p-6 backdrop-blur">
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