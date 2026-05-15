"use client";

import { useState } from "react";

const items = [
  {
    q: "¿Cuánto tarda implementar Klini?",
    a: "Entre 5 y 10 días hábiles. La parte más lenta suele ser el trámite con Meta para verificar tu número de WhatsApp Business — nosotros lo manejamos por vos. Una vez aprobado, cargar la info de tu clínica y entrenar las respuestas lleva 2-3 días.",
  },
  {
    q: "¿Necesito un número nuevo de WhatsApp?",
    a: "Podés usar uno existente siempre que no esté ya registrado en la app de WhatsApp común (no Business). Si lo está, hay que liberarlo primero — te explicamos cómo. La gran mayoría de clínicas prefieren un número nuevo dedicado para evitar mezclar conversaciones personales.",
  },
  {
    q: "¿Klini reemplaza a mi recepcionista?",
    a: "No. Y no queremos que lo haga. Klini saca de encima las preguntas repetidas — horarios, vacunas, obras sociales, cómo sacar turno — para que tu equipo pueda enfocarse en lo que requiere criterio humano: emergencias, casos complejos, atención presencial.",
  },
  {
    q: "¿Qué pasa con los datos de los pacientes?",
    a: "Los datos viven en infraestructura cifrada en LATAM, cumpliendo Ley 25.326 (Argentina) y equivalentes en Mex/Col/Chi. No usamos conversaciones para entrenar modelos públicos. Podés exportarlas o pedir su eliminación cuando quieras.",
  },
  {
    q: "¿Qué hace Klini ante una urgencia médica?",
    a: "Detecta el tono y palabras clave de urgencia (dolor agudo, fiebre alta, dificultad respiratoria) y deriva inmediatamente con un mensaje claro: número de emergencias del país + aviso a tu equipo para que tomen la conversación. Nunca diagnostica ni recomienda medicación.",
  },
  {
    q: "¿Puedo editar las respuestas yo mismo?",
    a: "Sí. Cada respuesta vive en un editor visual donde tu equipo cambia textos, agrega FAQs, configura horarios y obras sociales. Sin código. Los cambios se publican al instante.",
  },
  {
    q: "¿Cómo se cancela?",
    a: "Mes a mes, sin permanencia, con 30 días de aviso. Te devolvemos cualquier saldo a favor proporcional. Te exportamos todas las conversaciones y configuración en JSON antes de dar de baja.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="h-section">Lo que nos preguntan todo el tiempo.</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div
              className={`faq-item ${open === i ? "open" : ""}`}
              key={it.q}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{it.q}</span>
                <span className="faq-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className="faq-a-wrap">
                <div className="faq-a">
                  <div className="faq-a-inner">{it.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
