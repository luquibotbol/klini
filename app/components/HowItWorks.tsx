import Reveal from "./Reveal";
import SafariFrame from "./SafariFrame";

const steps = [
  {
    title: "Conectamos tu WhatsApp Business",
    desc: "Nos encargamos del trámite con Meta de punta a punta. Vos firmás y listo.",
  },
  {
    title: "Cargamos la info de tu clínica",
    desc: "Especialidades, horarios, vacunas, obras sociales, portal de turnos. Todo en tu lenguaje.",
  },
  {
    title: "Klini atiende 24/7",
    desc: "Lenguaje natural, seguro para medicina. Nunca diagnostica ni reemplaza criterio clínico.",
  },
  {
    title: "Tu equipo toma lo que importa",
    desc: "Las consultas que requieren humano llegan a un panel CRM con todo el contexto resumido.",
  },
];

function CrmBlock() {
  return (
    <Reveal className="crm-block">
      <h3
        className="h-card"
        style={{ fontSize: 26, letterSpacing: "-0.02em", maxWidth: "32ch" }}
      >
        Tu equipo ve cada conversación.
        <br />
        Toma las que necesitan una persona.
      </h3>
      <div className="crm-bullets">
        <div className="crm-bullet">
          <div className="crm-bullet-icon">🤖</div>
          <div className="crm-bullet-title">Lista clasificada</div>
          <div className="crm-bullet-desc">
            Bot atendiendo / Asignada / Derivada / Resuelta. Todo en un vistazo.
          </div>
        </div>
        <div className="crm-bullet">
          <div className="crm-bullet-icon">👋</div>
          <div className="crm-bullet-title">Toma con un click</div>
          <div className="crm-bullet-desc">
            Klini deja de responder y tu agente sigue desde donde quedó.
          </div>
        </div>
        <div className="crm-bullet">
          <div className="crm-bullet-icon">🏷️</div>
          <div className="crm-bullet-title">Tags por área</div>
          <div className="crm-bullet-desc">
            Turnos, recetas, vacunas, coberturas. Cada chat llega al equipo
            correcto.
          </div>
        </div>
      </div>
      <SafariFrame
        url="tu-centro.klini.app/chat"
        src="/assets/crm.png"
        alt="Panel CRM de Klini con bandeja de conversaciones"
      />
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="h-section">
            De cero a atendiendo en menos de una semana.
          </h2>
          <p className="lede" style={{ textAlign: "center" }}>
            Sin código, sin migración de números, sin manuales de 80 páginas.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <CrmBlock />
      </div>
    </section>
  );
}
