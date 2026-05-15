const items = [
  {
    icon: "💬",
    title: "Conversación natural",
    desc: "Sin menús 1-2-3. Tu paciente escribe como le sale; Klini entiende.",
  },
  {
    icon: "👥",
    title: "Panel CRM para tu equipo",
    desc: "Bandeja compartida, asignación por área, notas internas y estados.",
  },
  {
    icon: "🏷️",
    title: "Derivación inteligente",
    desc: "Turnos, recetas, vacunas, obras sociales: cada consulta al área correcta.",
  },
  {
    icon: "📊",
    title: "Dashboard real",
    desc: "Volumen, tiempos, derivaciones, satisfacción. Datos accionables, no vanity.",
  },
  {
    icon: "📢",
    title: "Campañas y recordatorios",
    desc: "Recordá controles, abrí campañas estacionales (antigripal, derma).",
  },
  {
    icon: "🛡️",
    title: "Seguro para medicina",
    desc: "Detecta urgencias y deriva al toque. Nunca diagnostica ni receta.",
  },
  {
    icon: "✏️",
    title: "Editás sin código",
    desc: "Cambiá una respuesta, agregá una vacuna nueva, modificá horarios en minutos.",
  },
  {
    icon: "🌎",
    title: "Español de cada país",
    desc: "Configurable Mex/Arg/Col/Chi/Per/Uru/España. Vos elegís el tono.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "var(--bg-soft)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="h-section">
            Todo lo que un bot tradicional
            <br />
            no te puede dar.
          </h2>
        </div>
        <div className="features-grid">
          {items.map((it) => (
            <div className="feature-card" key={it.title}>
              <div className="feature-icon">{it.icon}</div>
              <div className="feature-title">{it.title}</div>
              <div className="feature-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
