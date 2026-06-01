"use client";

import { useState } from "react";
import ChatMock from "./ChatMock";
import type { ClinicData } from "../lib/clinic";

type Props = {
  /** Clínica a mostrar en el chat. La home pasa la genérica; /demo/[slug] pasa la real. */
  clinic: ClinicData;
  /** Si es true, muestra el hero personalizado (pill + heading apuntando a la clínica). */
  personalized?: boolean;
};

export default function Hero({ clinic, personalized = false }: Props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setEmailErr(true);
      return;
    }
    setEmailErr(false);
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("demo")?.scrollIntoView();
    }, 600);
  };

  const clinicLabel = clinic.shortName ?? clinic.name;

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            {personalized ? (
              <span className="pill">
                <span className="dot dot-live" />
                Demo personalizada para {clinicLabel}
              </span>
            ) : (
              <span className="pill">
                <span className="dot dot-live" />
                La recepcionista de WhatsApp para tu clínica
              </span>
            )}

            {personalized ? (
              <h1 className="h-display mt-6">
                Así atendería Klini el WhatsApp de{" "}
                <span className="hl-lime">{clinicLabel}.</span>
              </h1>
            ) : (
              <h1 className="h-display mt-6">
                Tus pacientes preguntan.
                <br />
                Klini <span className="hl-lime">responde 24/7.</span>
              </h1>
            )}

            <p className="lede mt-6">
              {personalized
                ? `Probá el chat de la derecha — está cargado con datos reales de ${clinicLabel}. Hacele las preguntas que reciben todos los días.`
                : "Atendé las consultas repetidas — horarios, vacunas, obra social, cómo sacar turno — en WhatsApp sin sumar gente. Cuando hace falta, derivamos a tu equipo con todo el contexto."}
            </p>

            {personalized ? (
              <a
                href="#demo"
                className="btn btn-primary btn-lg mt-8"
                style={{ alignSelf: "flex-start" }}
              >
                Hablar con el equipo de Klini →
              </a>
            ) : (
              <>
                <form className="hero-form mt-8" onSubmit={onSubmit} noValidate>
                  <input
                    className={`input ${emailErr ? "error" : ""}`}
                    type="email"
                    placeholder="tu@clinica.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailErr(false);
                    }}
                    aria-label="Email"
                    aria-invalid={emailErr}
                  />
                  <div className="hero-form-divider" />
                  <input
                    className="input"
                    type="tel"
                    placeholder="WhatsApp +54 9..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-label="WhatsApp"
                  />
                  <button className="btn btn-primary btn-lg" type="submit">
                    {submitted ? "Yendo a la demo ↓" : "Pedir demo en vivo"}
                  </button>
                </form>
                {emailErr && (
                  <div className="input-error-text">
                    Ingresá un email válido para que te contactemos.
                  </div>
                )}
              </>
            )}

            <div className="hero-stats mt-12">
              <div className="hero-stat">
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">atención automática</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">&lt;500ms</div>
                <div className="hero-stat-label">tiempo de respuesta</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">10×</div>
                <div className="hero-stat-label">
                  más barato que un bot tradicional
                </div>
              </div>
            </div>
          </div>

          <div>
            <ChatMock clinic={clinic} />
          </div>
        </div>
      </div>
    </section>
  );
}
