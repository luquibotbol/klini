"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ClinicData, ScriptStep } from "../lib/clinic";

type Message =
  | { from: "user" | "bot"; text: string; time: string; key: string }
  | { typing: true; key: string };

type ApiMsg = { role: "user" | "assistant"; content: string };

const DEFAULT_FALLBACK =
  "Disculpá, no pude procesar eso. Probá de nuevo en un minuto.";

async function askLLM(
  slug: string,
  history: ApiMsg[],
  fallback: string,
): Promise<string> {
  try {
    const r = await fetch(`/api/chat/${encodeURIComponent(slug)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    });
    if (!r.ok) return fallback;
    const data = (await r.json()) as { reply?: string };
    return data.reply?.trim() || fallback;
  } catch {
    return fallback;
  }
}

function timeNow(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes(),
  ).padStart(2, "0")}`;
}

function ChatBubble({ msg }: { msg: Message }) {
  if ("typing" in msg) {
    return (
      <div className="typing" aria-label="Klini está escribiendo">
        <span />
        <span />
        <span />
      </div>
    );
  }
  return (
    <div className={`chat-bubble ${msg.from}`}>
      {msg.text}
      <span className="chat-bubble-time"> {msg.time}</span>
    </div>
  );
}

type Props = { clinic: ClinicData };

export default function ChatMock({ clinic }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [initialDone, setInitialDone] = useState(false);
  const [isBotResponding, setIsBotResponding] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);

  const fallback = clinic.fallback ?? DEFAULT_FALLBACK;
  const initialScript: ScriptStep[] = clinic.script;
  const headerName = clinic.shortName ?? clinic.name;
  const slug = clinic.slug;

  // Mantenemos el historial real (sin typings) para mandarlo al endpoint del LLM.
  const apiHistoryRef = useRef<ApiMsg[]>([]);

  useEffect(() => {
    let mounted = true;
    cancelledRef.current = false;

    async function runScript() {
      await new Promise((r) => setTimeout(r, 500));
      for (let i = 0; i < initialScript.length; i++) {
        if (!mounted || cancelledRef.current) return;
        const step = initialScript[i];
        if ("typing" in step) {
          setMessages((m) => [...m, { typing: true, key: `t-${i}` }]);
          await new Promise((r) => setTimeout(r, step.ms));
          setMessages((m) => m.filter((x) => !("typing" in x)));
        } else {
          setMessages((m) => [
            ...m,
            { from: step.from, text: step.text, time: timeNow(), key: `init-${i}` },
          ]);
          // Sumamos al historial para que el LLM tenga contexto del intro.
          apiHistoryRef.current.push({
            role: step.from === "bot" ? "assistant" : "user",
            content: step.text,
          });
          const next = initialScript[i + 1];
          const pause = next && "from" in next && next.from === step.from ? 350 : 700;
          await new Promise((r) => setTimeout(r, pause));
        }
      }
      setInitialDone(true);
    }
    runScript();
    return () => {
      mounted = false;
      cancelledRef.current = true;
    };
  }, [initialScript]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback(
    async (raw: string) => {
      const text = (raw || "").trim();
      if (!text || isBotResponding) return;
      setInput("");
      const ts = timeNow();
      setMessages((m) => [
        ...m,
        { from: "user", text, time: ts, key: `u-${Date.now()}` },
      ]);
      apiHistoryRef.current.push({ role: "user", content: text });
      setIsBotResponding(true);
      // Pequeña pausa antes del typing indicator (UX).
      await new Promise((r) => setTimeout(r, 250));
      setMessages((m) => [...m, { typing: true, key: `bt-${Date.now()}` }]);
      // Llamamos al endpoint. Cortamos historial a las últimas 10 entradas.
      const history = apiHistoryRef.current.slice(-10);
      const reply = await askLLM(slug, history, fallback);
      setMessages((m) => m.filter((x) => !("typing" in x)));
      apiHistoryRef.current.push({ role: "assistant", content: reply });
      setMessages((m) => [
        ...m,
        { from: "bot", text: reply, time: timeNow(), key: `b-${Date.now()}` },
      ]);
      setIsBotResponding(false);
    },
    [isBotResponding, slug, fallback],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      className="chat-frame"
      role="region"
      aria-label="Demo interactiva del chat de Klini"
    >
      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/k-mark.png" alt="K" />
          </div>
          <div className="chat-header-info">
            <div className="chat-header-name">{headerName}</div>
            <div className="chat-header-status">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#A8E063",
                  display: "inline-block",
                }}
              />
              en línea
            </div>
          </div>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <ChatBubble key={m.key || i} msg={m} />
          ))}
        </div>

        <form className="chat-input-wrap" onSubmit={handleSubmit}>
          <input
            className="chat-input"
            placeholder={
              initialDone
                ? "Escribí una pregunta…"
                : "Mirá la demo, después probá vos"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!initialDone || isBotResponding}
            aria-label="Mensaje al chat"
          />
          <button
            className="chat-send"
            type="submit"
            disabled={!input.trim() || isBotResponding}
            aria-label="Enviar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
