const items = [
  { name: "WhatsApp Business API", mark: "wa" },
  { name: "OpenAI", mark: "ai" },
  { name: "Meta Platforms", mark: "meta" },
  { name: "CEPEM", mark: "cepem" },
  { name: "Tu clínica acá", mark: "soon" },
];

export default function Logos() {
  return (
    <section style={{ padding: "60px 0 40px" }}>
      <div className="container">
        <div
          className="muted"
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Construido sobre tecnología que ya usan miles de clínicas
        </div>
        <div className="logos-row mt-8">
          {items.map((it) => (
            <div key={it.name} className="logo-block" title={it.name}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: "var(--ink-3)",
                  color: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {it.mark.slice(0, 2)}
              </div>
              {it.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
