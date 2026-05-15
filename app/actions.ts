"use server";

import { promises as fs } from "node:fs";
import path from "node:path";

export type LeadState = {
  status: "idle" | "success" | "error";
  message: string;
};

const LEADS_FILE = path.join(process.cwd(), "data", "leads.jsonl");

function sanitize(input: FormDataEntryValue | null, max = 300): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const honeypot = sanitize(formData.get("website"));
  if (honeypot) {
    return { status: "success", message: "¡Gracias! Te contactamos en menos de 24 hs." };
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
      message: "Completá nombre, clínica, email y WhatsApp para que te podamos contactar.",
    };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Revisá el email: parece inválido." };
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

  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    console.error("lead_write_failed", err);
    return {
      status: "error",
      message: "Algo falló de nuestro lado. Probá de nuevo en un minuto.",
    };
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("lead_webhook_failed", err);
    }
  }

  return {
    status: "success",
    message: "¡Gracias! Te contactamos en menos de 24 hs por WhatsApp.",
  };
}
