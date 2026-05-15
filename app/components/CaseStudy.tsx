export default function CaseStudy() {
  return (
    <section>
      <div className="container">
        <div className="case-card">
          <div className="case-quote-mark">&quot;</div>
          <div className="case-quote">
            Pasamos de pagar USD 3.500 al año por un bot rígido a tener un
            asistente que entiende a los pacientes y deriva al equipo solo
            cuando hace falta. La diferencia se siente desde la primera semana.
          </div>
          <div className="case-attrib">
            <div className="case-avatar">CE</div>
            <div>
              <div className="case-attrib-name">
                Dirección · Centro Médico CEPEM
              </div>
              <div className="case-attrib-where">
                Morón, Buenos Aires · Argentina
              </div>
            </div>
          </div>
          <div className="case-stats">
            <div>
              <div className="case-stat-value">200+</div>
              <div className="case-stat-label">
                conversaciones validadas en piloto
              </div>
            </div>
            <div>
              <div className="case-stat-value">17×</div>
              <div className="case-stat-label">ahorro vs. bot anterior</div>
            </div>
            <div>
              <div className="case-stat-value">&lt;500ms</div>
              <div className="case-stat-label">
                tiempo de respuesta promedio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
