"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Send } from "lucide-react";

export function MessageInput({ onSent }: { onSent: () => void }) {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  if (!session) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      setContent("");
      onSent();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tulis pesan..."
        className="flex-1 bg-card border border-border rounded-full px-5 py-3 text-sm focus:outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={loading || !content.trim()}
        className="bg-accent text-accent-foreground rounded-full px-5 py-3 disabled:opacity-50"
      >
        <Send className="size-4" />
      </button>
    </form>
  );
}