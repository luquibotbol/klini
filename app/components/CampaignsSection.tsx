import Reveal from "./Reveal";
import SafariFrame from "./SafariFrame";

const bullets = [
  {
    icon: "💉",
    title: "Recordatorios automáticos de turno",
    desc: "Mandá un recordatorio 24 hs antes. Reduce los no-shows hasta un 22% promedio.",
  },
  {
    icon: "🔬",
    title: "Avisos de resultados listos",
    desc: "Apenas el laboratorio carga los resultados, Klini avisa al paciente con link al portal. Sin que tu equipo haga nada.",
  },
  {
    icon: "💉",
    title: "Campañas de vacunación segmentadas",
    desc: "Antigripal solo a mayores de 50. HPV solo a adolescentes. Segmentación por edad, obra social, última visita o etiqueta.",
  },
  {
    icon: "📋",
    title: "Plantillas pre-aprobadas por Meta",
    desc: "Tu equipo arma la plantilla desde Klini. Meta la aprueba en 1–24 hs. Sin riesgo de bloqueo del número.",
  },
  {
    icon: "📊",
    title: "Métricas en vivo",
    desc: "Tasa de entrega, lectura, respuesta y conversión a turnos. Sabés qué campañas funcionan.",
  },
];

export default function CampaignsSection() {
  return (
    <section>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 24 }}>
          <span className="pill" style={{ color: "var(--olive)" }}>
            <span className="dot dot-live" />
            Campañas
          </span>
          <h2 className="h-section">No solo respondés. También llegás vos.</h2>
          <p className="lede" style={{ textAlign: "center" }}>
            Klini incluye un sistema completo de mensajes salientes por WhatsApp
            — recordatorios de turno, avisos de resultados, campañas de
            vacunación, promos de chequeos. Todo con plantillas oficiales de
            Meta para que nunca te bloqueen el número.
          </p>
        </div>

        <Reveal className="camp-grid">
          <SafariFrame
            url="tu-centro.klini.app/campañas"
            src="/assets/campaigns.png"
            alt="Panel de campañas masivas de Klini"
          />
          <div className="camp-bullets">
            {bullets.map((b, i) => (
              <div className="camp-bullet" key={i}>
                <div className="camp-bullet-icon">{b.icon}</div>
                <div>
                  <div className="camp-bullet-title">{b.title}</div>
                  <div className="camp-bullet-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
