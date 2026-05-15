"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ScriptStep =
  | { from: "user" | "bot"; text: string }
  | { typing: true; ms: number };

type Message =
  | { from: "user" | "bot"; text: string; time: string; key: string }
  | { typing: true; key: string };

const INITIAL_SCRIPT: ScriptStep[] = [
  { from: "user", text: "Hola, necesito información sobre vacunas" },
  { typing: true, ms: 1000 },
  {
    from: "bot",
    text: "¡Hola! Soy Klini, asistente del Centro Médico Demo 👋\n\nTenemos vacunatorio de lunes a viernes de 8 a 18 hs y sábados de 8 a 13. ¿Sobre qué vacuna querés información?",
  },
  { from: "user", text: "antigripal para adulto" },
  { typing: true, ms: 1100 },
  {
    from: "bot",
    text: "Para la antigripal en adultos no se requiere turno previo. Llevá DNI y carnet de vacunación.\n\nLa atendemos en Av. Demo 123, planta baja. ¿Te paso el mapa?",
  },
];

const RESPONSES: { keys: string[]; text: string }[] = [
  {
    keys: ["turno", "agendar", "agenda", "cita", "reservar"],
    text: "Los turnos los gestionás desde nuestro portal de pacientes en portal.demo.com. Si querés, te paso el paso a paso o te derivo con una recepcionista. 👩‍⚕️",
  },
  {
    keys: ["horario", "abren", "abierto", "hora"],
    text: "Atendemos de lunes a viernes de 7 a 20 hs y sábados de 8 a 14 hs. Vacunatorio: lun-vie 8-18, sábados 8-13.",
  },
  {
    keys: ["vacuna", "antigripal", "covid", "hpv"],
    text: "Tenemos disponibles: antigripal, COVID, HPV, hepatitis B, fiebre amarilla y triple viral. ¿Sobre cuál querés saber más?",
  },
  {
    keys: ["obra social", "prepaga", "osde", "swiss", "galeno", "ioma", "pami"],
    text: "Trabajamos con OSDE, Swiss Medical, Galeno, Medifé, IOMA y PAMI entre otras. ¿Con cuál tenés cobertura? Te confirmo si está bonificada para tu especialidad.",
  },
  {
    keys: ["urgencia", "emergencia", "dolor", "fiebre alta", "ahora"],
    text: "⚠️ Si es una emergencia médica, te derivo ahora con una recepcionista para que te oriente. También podés llamar al 107 (SAME).",
  },
  {
    keys: ["receta", "medicamento", "remedio"],
    text: "Para renovación de recetas necesitamos pedirlas con 48 hs de anticipación. Decime el medicamento y la última fecha de la receta, lo derivo al médico de cabecera.",
  },
  {
    keys: ["direccion", "ubicacion", "dónde", "donde", "mapa"],
    text: "Estamos en Av. Demo 123, Morón, Provincia de Buenos Aires. Hay estacionamiento gratuito y subte línea X a dos cuadras. 📍",
  },
  {
    keys: [
      "pediatra",
      "ginecólogo",
      "ginecologo",
      "cardiólogo",
      "cardiologo",
      "especialidad",
      "clínica",
      "clinica",
    ],
    text: "Tenemos +25 especialidades. Decime cuál buscás y te confirmo médicos disponibles y obras sociales bonificadas. 🩺",
  },
];

const FALLBACK =
  "Buena pregunta — esto sería personalizado para tu clínica. Pedinos una demo y te mostramos cómo se ve. 😉";

function findResponse(text: string): string {
  const t = text.toLowerCase();
  for (const r of RESPONSES) {
    if (r.keys.some((k) => t.includes(k))) return r.text;
  }
  return FALLBACK;
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

export default function ChatMock() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [initialDone, setInitialDone] = useState(false);
  const [isBotResponding, setIsBotResponding] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);

  useEffect(() => {
    let mounted = true;
    cancelledRef.current = false;

    async function runScript() {
      await new Promise((r) => setTimeout(r, 500));
      for (let i = 0; i < INITIAL_SCRIPT.length; i++) {
        if (!mounted || cancelledRef.current) return;
        const step = INITIAL_SCRIPT[i];
        if ("typing" in step) {
          setMessages((m) => [...m, { typing: true, key: `t-${i}` }]);
          await new Promise((r) => setTimeout(r, step.ms));
          setMessages((m) => m.filter((x) => !("typing" in x)));
        } else {
          setMessages((m) => [
            ...m,
            { from: step.from, text: step.text, time: timeNow(), key: `init-${i}` },
          ]);
          const next = INITIAL_SCRIPT[i + 1];
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
  }, []);

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
      setIsBotResponding(true);
      await new Promise((r) => setTimeout(r, 350));
      setMessages((m) => [...m, { typing: true, key: `bt-${Date.now()}` }]);
      await new Promise((r) => setTimeout(r, 900 + Math.random() * 500));
      setMessages((m) => m.filter((x) => !("typing" in x)));
      const reply = findResponse(text);
      setMessages((m) => [
        ...m,
        { from: "bot", text: reply, time: timeNow(), key: `b-${Date.now()}` },
      ]);
      setIsBotResponding(false);
    },
    [isBotResponding],
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
            <div className="chat-header-name">Centro Médico Demo</div>
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
