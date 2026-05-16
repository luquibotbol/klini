"use client";

import { useActionState, useEffect, useRef } from "react";
import Script from "next/script";
import { submitLead, type LeadState } from "../actions";

const initialState: LeadState = { status: "idle", message: "" };

// Clave de sitio de Cloudflare Turnstile. Si no hay env var, se usa la
// clave de prueba de Cloudflare (siempre pasa) para que dev funcione.
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

function fireConfetti() {
  const colors = ["#25D366", "#0f766e", "#dbf8c6", "#fafbfb", "#2EE070"];
  for (let i = 0; i < 36; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = `${30 + Math.random() * 40}%`;
    el.style.top = `${20 + Math.random() * 20}%`;
    el.style.background = colors[i % colors.length];
    el.style.animationDelay = `${Math.random() * 0.3}s`;
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }
}

export default function CTAFinal() {
  const [state, formAction, pending] = useActionState(
    submitLead,
    initialState,
  );

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const renderTurnstile = () => {
    if (!window.turnstile || !widgetRef.current || widgetId.current) return;
    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
    });
  };

  useEffect(() => {
    if (state.status === "success") fireConfetti();
    // Los tokens de Turnstile son de un solo uso: tras un error, refrescar.
    if (state.status === "error" && widgetId.current && window.turnstile) {
      window.turnstile.reset(widgetId.current);
    }
  }, [state]);

  return (
    <section id="demo">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
        onReady={renderTurnstile}
      />
      <div className="container">
        <div className="cta-final">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="pill pill-lime">
              <span className="dot" />
              Demo personalizada · 30 minutos
            </span>
            <h2 className="h-section mt-4" style={{ color: "#fff" }}>
              Probá Klini
              <br />
              en tu clínica.
            </h2>
            <p
              className="lede mt-4"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Te mostramos cómo se vería atendiendo a tus pacientes — con tus
              horarios, tus obras sociales, tu tono.
            </p>
            <ul className="cta-bullets">
              <li className="cta-bullet">
                <span className="cta-bullet-icon">✓</span>
                <span>Demo personalizada con tu información real.</span>
              </li>
              <li className="cta-bullet">
                <span className="cta-bullet-icon">✓</span>
                <span>
                  Te ayudamos con el trámite Meta de punta a punta.
                </span>
              </li>
              <li className="cta-bullet">
                <span className="cta-bullet-icon">✓</span>
                <span>
                  Primer mes con 50% off si cerrás dentro de 30 días.
                </span>
              </li>
            </ul>
          </div>

          <div className="cta-form-card">
            {state.status === "success" ? (
              <div className="cta-form-success">
                <div className="cta-form-success-mark">✓</div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  ¡Listo!
                </div>
                <div
                  className="muted"
                  style={{
                    fontSize: 14.5,
                    maxWidth: "32ch",
                    textWrap: "pretty",
                  }}
                >
                  {state.message} Mientras tanto, podés seguir probando el chat
                  de arriba.
                </div>
              </div>
            ) : (
              <form action={formAction} noValidate>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                    marginBottom: 4,
                  }}
                >
                  Reservá tu demo
                </div>
                <div
                  className="muted"
                  style={{ fontSize: 13.5, marginBottom: 12 }}
                >
                  Te respondemos en menos de 24 hs.
                </div>

                <div
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="cta-form-row">
                  <div className="cta-form-field">
                    <label className="cta-form-label">Nombre</label>
                    <input
                      className="cta-form-input"
                      name="name"
                      placeholder="Camila Pérez"
                    />
                  </div>
                  <div className="cta-form-field">
                    <label className="cta-form-label">Clínica</label>
                    <input
                      className="cta-form-input"
                      name="clinic"
                      placeholder="Centro Médico ..."
                    />
                  </div>
                </div>

                <div className="cta-form-field">
                  <label className="cta-form-label">Email</label>
                  <input
                    className="cta-form-input"
                    type="email"
                    name="email"
                    placeholder="tu@clinica.com"
                  />
                </div>

                <div className="cta-form-row">
                  <div className="cta-form-field">
                    <label className="cta-form-label">WhatsApp</label>
                    <input
                      className="cta-form-input"
                      name="phone"
                      placeholder="+54 9 11 ..."
                    />
                  </div>
                  <div className="cta-form-field">
                    <label className="cta-form-label">País</label>
                    <select
                      className="cta-form-input"
                      name="country"
                      defaultValue="Argentina"
                    >
                      <option>Argentina</option>
                      <option>México</option>
                      <option>Colombia</option>
                      <option>Chile</option>
                      <option>Uruguay</option>
                      <option>Perú</option>
                      <option>España</option>
                    </select>
                  </div>
                </div>

                <div className="cta-form-field">
                  <label className="cta-form-label">Notas (opcional)</label>
                  <textarea
                    className="cta-form-input cta-form-textarea"
                    name="notes"
                    placeholder="Cantidad de sedes, volumen de mensajes, lo que quieras contarnos…"
                  />
                </div>

                <div
                  ref={widgetRef}
                  className="cf-turnstile"
                  style={{ marginTop: 12, minHeight: 65 }}
                />

                {state.status === "error" && (
                  <div
                    className="input-error-text"
                    style={{ paddingLeft: 4, marginTop: 8 }}
                  >
                    {state.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-lime btn-lg"
                  style={{ width: "100%", marginTop: 8 }}
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <span className="spinner" /> Enviando…
                    </>
                  ) : (
                    "Pedir demo →"
                  )}
                </button>
                <div
                  className="muted"
                  style={{
                    fontSize: 12.5,
                    textAlign: "center",
                    marginTop: 6,
                  }}
                >
                  Sin spam. Te escribimos solo para coordinar la demo.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
