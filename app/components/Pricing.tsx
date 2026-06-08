const sharedFeatures = [
  "Conversaciones ilimitadas",
  "Usuarios y agentes ilimitados",
  "Panel CRM completo",
  "Derivación inteligente por área",
  "Campañas y recordatorios",
  "Editor de respuestas sin código",
  "Dashboard de métricas",
  "Soporte prioritario por WhatsApp",
];

type Plan = {
  name: string;
  badge: string | null;
  badgeKind?: "lime" | "gray";
  price: string;
  priceUnit: string | null;
  sub: string;
  promo?: string;
  desc: string;
  features: string[];
  cta: string;
  ctaKind: "lime" | "primary" | "ghost";
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Founding member",
    badge: "Cupos limitados",
    badgeKind: "lime",
    price: "USD 150",
    priceUnit: "/mes",
    sub: "Setup $250 USD",
    promo: "🎁 Primeros 3 meses gratis",
    desc: "Para las primeras clínicas que entran. Congelás este precio de por vida.",
    features: sharedFeatures,
    cta: "Reservar mi cupo",
    ctaKind: "lime",
    featured: true,
  },
  {
    name: "Regular",
    badge: null,
    price: "USD 249",
    priceUnit: "/mes",
    sub: "Setup $350 USD",
    desc: "El plan completo de Klini, sin límites de uso.",
    features: sharedFeatures,
    cta: "Empezar",
    ctaKind: "primary",
    featured: false,
  },
  {
    name: "Enterprise",
    badge: "Turnos desde WhatsApp",
    badgeKind: "gray",
    price: "A medida",
    priceUnit: null,
    sub: "Integración con tu sistema de gestión",
    desc: "Para clínicas que quieren que sus pacientes saquen y gestionen turnos directamente desde el chat de WhatsApp.",
    features: [
      "Todo lo del plan Regular",
      "Reserva de turnos desde WhatsApp",
      "Integración con tu sistema de gestión / HIS / portal",
      "Cancelación y reprogramación de turnos por chat",
      "Multi-sede y multi-marca",
      "SLA de 99.9%",
      "Account manager dedicado",
    ],
    cta: "Hablar con ventas",
    ctaKind: "ghost",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div className="section-head">
          <span className="pill" style={{ color: "var(--olive)" }}>
            <span className="dot dot-live" />
            Precios
          </span>
          <h2 className="h-section">
            Pagás menos que un sueldo de medio tiempo.
            <br />
            Atendés 24/7, sin límites.
          </h2>
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div
              className={`price-card ${p.featured ? "featured" : ""}`}
              key={p.name}
            >
              {p.badge && (
                <div
                  className={`price-badge ${
                    p.badgeKind === "gray" ? "gray" : ""
                  }`}
                >
                  {p.badgeKind === "lime" && (
                    <span
                      className="dot"
                      style={{ background: "#0a3a1e" }}
                    />
                  )}
                  {p.badge}
                </div>
              )}
              <div className="price-name">{p.name}</div>
              <div>
                <div className="price-amount-row">
                  <span className="price-amount">{p.price}</span>
                  {p.priceUnit && (
                    <span className="price-amount-unit">{p.priceUnit}</span>
                  )}
                </div>
                <div className="price-setup mt-2">{p.sub}</div>
              </div>
              {p.promo && <div className="price-promo">{p.promo}</div>}
              <div className="price-desc">{p.desc}</div>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li className="price-feature" key={f}>
                    <span className="price-feature-icon">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`btn price-cta ${
                  p.ctaKind === "lime"
                    ? "btn-lime"
                    : p.ctaKind === "ghost"
                      ? "btn-ghost"
                      : "btn-primary"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="price-footnote">
          Los precios no incluyen el costo de mensajes de Meta (≈ USD 0.005 –
          0.04 por conversación según país). Meta te lo factura directamente.
        </p>
      </div>
    </section>
  );
}
