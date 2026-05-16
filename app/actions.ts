"use server";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
};

function sanitize(input: FormDataEntryValue | null, max = 300): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const SUCCESS_MESSAGE =
  "¡Gracias! Te contactamos en menos de 24 hs por WhatsApp.";

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const honeypot = sanitize(formData.get("website"));
  if (honeypot) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const name = sanitize(formData.get("name"), 120);
  const clinic = sanitize(formData.get("clinic"), 160);
  const email = sanitize(formData.get("email"), 200);
  const phone = sanitize(formData.get("phone"), 40);
  const country = sanitize(formData.get("country"), 80);
  const notes = sanitize(formData.get("notes"), 1000);

  if (!name || !clinic || !email || !phone) {
    return {
      status: "error",
      message:
        "Completá nombre, clínica, email y WhatsApp para que te podamos contactar.",
    };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Revisá el email: parece inválido." };
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = sanitize(formData.get("cf-turnstile-response"), 2048);
    try {
      const verify = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret: turnstileSecret, response: token }),
        },
      );
      const result = (await verify.json()) as { success?: boolean };
      if (!result.success) {
        return {
          status: "error",
          message:
            "No pudimos verificar el envío. Recargá la página e intentá de nuevo.",
        };
      }
    } catch (err) {
      console.error("turnstile_verify_failed", err);
      return {
        status: "error",
        message: "Algo falló de nuestro lado. Probá de nuevo en un minuto.",
      };
    }
  } else {
    console.warn(
      "TURNSTILE_SECRET_KEY no configurada — verificación anti-bot omitida",
    );
  }

  const record = {
    ts: new Date().toISOString(),
    name,
    clinic,
    email,
    phone,
    country,
    notes,
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.warn("LEAD_WEBHOOK_URL no configurada — lead sin enviar:", record);
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...record,
        secret: process.env.LEAD_WEBHOOK_SECRET ?? "",
      }),
    });
    if (!res.ok) throw new Error(`webhook respondió ${res.status}`);
  } catch (err) {
    console.error("lead_webhook_failed", err);
    return {
      status: "error",
      message: "Algo falló de nuestro lado. Probá de nuevo en un minuto.",
    };
  }

  return { status: "success", message: SUCCESS_MESSAGE };
}
