import Image from "next/image";
import { MessageReactions } from "./message-reactions";
import { UserRound } from "lucide-react";

interface MessageUser {
  name: string | null;
  image: string | null;
  email: string | null;
}

interface MessageData {
  id: string;
  content: string;
  createdAt: string;
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

function Avatar({ user, size = 9 }: { user: MessageUser; size?: number }) {
  return (
    <div
      className={`relative size-${size} rounded-full overflow-hidden bg-muted shrink-0`}
    >
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
  return (
    <div className="flex flex-col gap-6">
      {messages.map((msg) => {
        const isAuthor =
          msg.user.email?.toLowerCase() ===
          process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase();

        return (
          <div key={msg.id}>
            <div
              className={`flex gap-3 ${
                isAuthor ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar user={msg.user} />

              <div className={`flex-1 ${isAuthor ? "flex flex-col items-end" : ""}`}>
                <div
                  className={`flex items-center gap-2 mb-1 ${
                    isAuthor ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="text-xs text-muted-foreground">
                    {formatDate(msg.createdAt)}
                  </span>
                  {isAuthor && (
                 <span className="inline-flex h-6 items-center gap-1 rounded-full border border-yellow-400 bg-yellow-400/10 px-2.5 text-[11px] font-semibold text-yellow-400">
  <UserRound className="h-3 w-3" strokeWidth={2} />
  Author
</span>
                  )}
                  <span className="font-semibold text-sm">{msg.user.name}</span>
                </div>

                <div
                  className={`rounded-2xl px-4 py-2.5 inline-block mb-2 max-w-md ${
                    isAuthor
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>

                <div className={isAuthor ? "flex justify-end w-full" : ""}>
                  <MessageReactions
                    messageId={msg.id}
                    reactions={msg.reactions}
                    onReact={onReact}
                  />
                </div>
              </div>
            </div>

            {msg.replies.length > 0 && (
              <div className="ml-12 mt-4 flex flex-col gap-4">
                {msg.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-3">
                    <Avatar user={reply.user} size={8} />
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        {reply.user.name}
                      </p>
                      <div className="bg-muted rounded-2xl px-4 py-2.5 inline-block">
                        <p className="text-sm">{reply.content}</p>
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