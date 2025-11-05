"use client";

import { ChatMessage as ChatMessageType } from "@/types/chatbot";
import { cn } from "@/utils/shadcn";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div className="flex items-start gap-2 max-w-[85%]">
        {isBot && (
          <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-md">
            🤖
          </div>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-sm",
            isBot
              ? "bg-white border border-gray-200 text-gray-800"
              : "bg-primary text-primary-foreground"
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {message.text}
          </p>
          <span className="text-xs opacity-60 mt-1 block">
            {message.timestamp.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        {!isBot && (
          <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-md">
            👤
          </div>
        )}
      </div>
    </div>
  );
}
