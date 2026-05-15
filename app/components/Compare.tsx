type CellValue = boolean | string;

const rows: [string, CellValue, CellValue][] = [
  ["Entiende lenguaje natural", true, false],
  ["Menús rígidos 1-2-3", false, true],
  ["Panel CRM para tu equipo", true, false],
  ["Detecta urgencias y deriva", true, false],
  ["Editás respuestas sin código", true, false],
  ["Métricas reales (no solo conteos)", true, false],
  ["Configurable por país", true, "limitado"],
  ["Implementación con Meta incluida", true, false],
  ["Precio mensual aproximado", "USD 249", "USD 290+"],
];

function cell(v: CellValue, isKlini: boolean) {
  if (v === true) return <span className="compare-check">✓</span>;
  if (v === false) return <span className="compare-dash">—</span>;
  return (
    <span
      style={{
        color: isKlini ? "var(--olive-deep)" : "var(--ink-3)",
        fontWeight: 500,
      }}
    >
      {v}
    </span>
  );
}

export default function Compare() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Comparativa</span>
          <h2 className="h-section">Klini vs. bot tradicional.</h2>
          <p className="lede" style={{ textAlign: "center" }}>
            Honesto. Los bots viejos no son malos — son rígidos.
            <br />
            Klini es lo que pasa cuando reescribís el problema con IA.
          </p>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th />
                <th className="col-klini">
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/k-mark.png"
                      alt=""
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        objectFit: "cover",
                        background: "#fff",
                      }}
                    />
                    Klini
                  </div>
                </th>
                <th>Bot tradicional</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, k, b]) => (
                <tr key={label}>
                  <td className="compare-cell-row">{label}</td>
                  <td className="col-klini">{cell(k, true)}</td>
                  <td>{cell(b, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
