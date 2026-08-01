"use client";

import { useSession } from "next-auth/react";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Reaction {
  id: string;
  emoji: string;
  userId: string;
}

const EMOJI_OPTIONS = ["😄", "😊", "🔥", "❤️", "👍"];

export function MessageReactions({
  messageId,
  reactions,
  onReact,
}: {
  messageId: string;
  reactions: Reaction[];
  onReact: () => void;
}) {
  const { data: session } = useSession();
  const [showPicker, setShowPicker] = useState(false);

  const grouped = reactions.reduce<Record<string, number>>((acc, r) => {
    acc[r.emoji] = (acc[r.emoji] || 0) + 1;
    return acc;
  }, {});

  async function handleReact(emoji: string) {
    if (!session) return;
    await fetch("/api/guestbook/reactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId, emoji }),
    });
    setShowPicker(false);
    onReact();
  }

  return (
    <div className="flex items-center gap-2 relative">
      {Object.entries(grouped).map(([emoji, count]) => (
        <button
          key={emoji}
          onClick={() => handleReact(emoji)}
          className="flex items-center gap-1 bg-muted text-sm px-2.5 py-1 rounded-full hover:bg-muted/70 transition-colors"
        >
          {emoji} {count}
        </button>
      ))}

      {session && (
        <button
          onClick={() => setShowPicker((p) => !p)}
          className="size-7 rounded-full border border-dashed border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <Plus className="size-3.5" />
        </button>
      )}

      {showPicker && (
        <div className="absolute top-8 left-0 z-10 flex gap-1 bg-card border border-border rounded-full px-2 py-1.5 shadow-lg">
          {EMOJI_OPTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleReact(emoji)}
              className="hover:scale-125 transition-transform text-lg"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}