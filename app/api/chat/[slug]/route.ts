import { NextResponse } from "next/server";
import { getClinic } from "../../../lib/clinics";
import { buildSystemPrompt } from "../../../lib/clinic-kb";

// Node.js runtime (default). En Cloudflare Workers vía OpenNext, las rutas
// "edge" no reciben process.env de forma fiable y rompían con 500. La ruta
// Node corre sobre el Worker con nodejs_compat y process.env poblado.
export const dynamic = "force-dynamic";

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

type Msg = { role: "user" | "assistant"; content: string };

const FALLBACK_REPLY =
  "Disculpá, ahora no puedo procesar tu consulta. Probá de nuevo en un minuto o escribime de otra forma.";

function isMsg(x: unknown): x is Msg {
  if (!x || typeof x !== "object") return false;
  const o = x as { role?: unknown; content?: unknown };
  return (
    (o.role === "user" || o.role === "assistant") &&
    typeof o.content === "string" &&
    o.content.length > 0 &&
    o.content.length < 1500
  );
}

export async function POST(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const clinic = getClinic(slug);
  if (!clinic) {
    return NextResponse.json({ error: "clinic_not_found" }, { status: 404 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-nano";
  if (!apiKey) {
    console.warn("OPENAI_API_KEY no configurada — usando fallback");
    return NextResponse.json({ reply: FALLBACK_REPLY });
  }

  let body: { messages?: unknown };
  try {
    body = (await request.json()) as { messages?: unknown };
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }

  if (!Array.isArray(body.messages)) {
    return NextResponse.json({ error: "missing_messages" }, { status: 400 });
  }

  const incoming = (body.messages as unknown[]).filter(isMsg);
  // Cap a las últimas 8 entradas (~4 turnos) para acotar tokens.
  const history = incoming.slice(-8);
  if (history.length === 0) {
    return NextResponse.json({ error: "empty_messages" }, { status: 400 });
  }
  if (history[history.length - 1].role !== "user") {
    return NextResponse.json({ error: "last_must_be_user" }, { status: 400 });
  }

  try {
    const systemContent = buildSystemPrompt(clinic);
    const r = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 250,
        messages: [
          { role: "system", content: systemContent },
          ...history,
        ],
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      console.error("openai_error", r.status, errText.slice(0, 300));
      return NextResponse.json({ reply: FALLBACK_REPLY });
    }

    const data = (await r.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) return NextResponse.json({ reply: FALLBACK_REPLY });

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("chat_route_error", err);
    return NextResponse.json({ reply: FALLBACK_REPLY });
  }
}
