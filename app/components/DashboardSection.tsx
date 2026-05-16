import Reveal from "./Reveal";
import SafariFrame from "./SafariFrame";

const callouts = [
  { num: "304 horas", label: "ahorradas a tu equipo este mes" },
  { num: "1.087 conversaciones", label: "derivadas al equipo correcto" },
  { num: "17.991 consultas", label: "recibidas este mes" },
];

export default function DashboardSection() {
  return (
    <section className="dash-section">
      <div className="container">
        <div className="section-head">
          <span className="pill" style={{ color: "var(--olive)" }}>
            <span className="dot dot-live" />
            El otro lado del chat
          </span>
          <h2 className="h-section">
            Mientras Klini atiende a tus pacientes,
            <br />
            vos ves todo lo que pasa.
          </h2>
          <p className="lede" style={{ textAlign: "center" }}>
            Volumen de consultas, temas más preguntados, horas ahorradas a tu
            equipo. Decisión con datos reales.
          </p>
        </div>

        <Reveal className="dash-shot-wrap">
          <div className="dash-callout cl-1">
            <span className="dash-callout-num">304 hs</span>
            <span className="dash-callout-label">
              ahorradas a tu equipo este mes
            </span>
          </div>
          <div className="dash-callout-line" />

          <div className="dash-callout cl-2">
            <span className="dash-callout-num">1.087</span>
            <span className="dash-callout-label">
              conversaciones derivadas al equipo
            </span>
          </div>
          <div className="dash-callout-line" />

          <div className="dash-callout cl-3">
            <span className="dash-callout-num">17.991 consultas</span>
            <span className="dash-callout-label">recibidas este mes</span>
          </div>
          <div className="dash-callout-line" />

          <SafariFrame
            url="tu-centro.klini.app/dashboard"
            src="/assets/dashboard.png"
            alt="Dashboard de Klini mostrando métricas del período"
            eager
          />

          <div className="dash-callout-mobile-list">
            {callouts.map((c) => (
              <div className="item" key={c.num}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--olive)",
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--olive)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.num}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-3)" }}>
                    {c.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
