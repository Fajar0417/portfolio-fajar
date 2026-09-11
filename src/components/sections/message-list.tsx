"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { MessageReactions } from "./message-reactions";
import { UserRound, Pin, Pencil, Trash2, Check, X } from "lucide-react";

interface MessageUser {
  name: string | null;
  image: string | null;
  email: string | null;
}

interface MessageData {
  id: string;
  content: string;
  createdAt: string;
  isPinned?: boolean;
  user: MessageUser;
  reactions: { id: string; emoji: string; userId: string }[];
  replies: MessageData[];
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Avatar({ user, size = "size-8 sm:size-9" }: { user: MessageUser; size?: string }) {
  return (
    <div className={`relative ${size} rounded-full overflow-hidden bg-muted shrink-0`}>
      {user.image ? (
        <Image src={user.image} alt={user.name ?? ""} fill className="object-cover" />
      ) : (
        <div className="size-full flex items-center justify-center text-sm font-semibold">
          {user.name?.[0] ?? "?"}
        </div>
      )}
    </div>
  );
}

export function MessageList({
  messages,
  onReact,
}: {
  messages: MessageData[];
  onReact: () => void;
}) {
  const { data: session } = useSession();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase();
  const isAdmin = session?.user?.email?.toLowerCase() === adminEmail;

  async function handleSaveEdit(id: string) {
    if (!editValue.trim()) return;
    setBusyId(id);
    try {
      await fetch("/api/guestbook", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, content: editValue }),
      });
      setEditingId(null);
      onReact();
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Hapus pesan ini?")) return;
    setBusyId(id);
    try {
      await fetch(`/api/guestbook?id=${id}`, { method: "DELETE" });
      onReact();
    } finally {
      setBusyId(null);
    }
  }

  async function handleTogglePin(id: string, current: boolean) {
    setBusyId(id);
    try {
      await fetch("/api/guestbook", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isPinned: !current }),
      });
      onReact();
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {messages.map((msg) => {
        const isAuthor = msg.user.email?.toLowerCase() === adminEmail;
        const isOwnMessage = session?.user?.email?.toLowerCase() === msg.user.email?.toLowerCase();
        const isEditing = editingId === msg.id;

        return (
          <div key={msg.id}>
            {msg.isPinned && (
              <div className={`flex items-center gap-1.5 mb-1.5 text-[11px] text-yellow-400 ${isAuthor ? "justify-end" : ""}`}>
                <Pin className="size-3 fill-yellow-400" />
                <span>Disematkan</span>
              </div>
            )}

            <div className={`flex gap-2 sm:gap-3 ${isAuthor ? "flex-row-reverse" : ""}`}>
              <Avatar user={msg.user} />

              <div className={`flex-1 min-w-0 ${isAuthor ? "flex flex-col items-end" : ""}`}>
                <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap ${isAuthor ? "flex-row-reverse" : ""}`}>
                  <span className="text-[11px] sm:text-xs text-muted-foreground">
                    {formatDate(msg.createdAt)}
                  </span>
                  {isAuthor && (
                    <span className="inline-flex h-5 sm:h-6 items-center gap-1 rounded-full border border-yellow-400 bg-yellow-400/10 px-2 sm:px-2.5 text-[10px] sm:text-[11px] font-semibold text-yellow-400">
                      <UserRound className="h-3 w-3" strokeWidth={2} />
                      Author
                    </span>
                  )}
                  <span className="font-semibold text-xs sm:text-sm">{msg.user.name}</span>
                </div>

                {isEditing ? (
                  <div className="flex items-center gap-2 mb-1.5 w-full max-w-[85%] sm:max-w-md">
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="flex-1 bg-muted rounded-full px-3 py-2 text-xs sm:text-sm focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSaveEdit(msg.id)}
                      disabled={busyId === msg.id}
                      className="shrink-0 size-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center disabled:opacity-50"
                    >
                      <Check className="size-3.5" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="shrink-0 size-7 rounded-full bg-muted flex items-center justify-center"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ) : (
                  <div
                    className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 inline-block mb-1.5 sm:mb-2 max-w-[85%] sm:max-w-md ${
                      isAuthor ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-xs sm:text-sm break-words">{msg.content}</p>
                  </div>
                )}

                <div className={`flex items-center gap-3 flex-wrap ${isAuthor ? "flex-row-reverse w-full justify-start" : ""}`}>
                  <MessageReactions
                    messageId={msg.id}
                    reactions={msg.reactions}
                    onReact={onReact}
                  />

                  {!isEditing && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {isOwnMessage && (
                        <button
                          onClick={() => {
                            setEditingId(msg.id);
                            setEditValue(msg.content);
                          }}
                          className="hover:text-foreground"
                          aria-label="Edit"
                        >
                          <Pencil className="size-3.5" />
                        </button>
                      )}
                      {(isOwnMessage || isAdmin) && (
                        <button
                          onClick={() => handleDelete(msg.id)}
                          disabled={busyId === msg.id}
                          className="hover:text-red-500"
                          aria-label="Hapus"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      )}
                      {isAdmin && (
                        <button
                          onClick={() => handleTogglePin(msg.id, !!msg.isPinned)}
                          disabled={busyId === msg.id}
                          className={`hover:text-yellow-400 ${msg.isPinned ? "text-yellow-400" : ""}`}
                          aria-label="Sematkan"
                        >
                          <Pin className="size-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {msg.replies.length > 0 && (
              <div className="ml-9 sm:ml-12 mt-3 sm:mt-4 flex flex-col gap-3 sm:gap-4">
                {msg.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-2 sm:gap-3">
                    <Avatar user={reply.user} size="size-7 sm:size-8" />
                    <div className="min-w-0">
                      <p className="font-semibold text-xs sm:text-sm mb-1">{reply.user.name}</p>
                      <div className="bg-muted rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 inline-block max-w-[85%] sm:max-w-md">
                        <p className="text-xs sm:text-sm break-words">{reply.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}