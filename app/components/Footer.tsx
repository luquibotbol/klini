function KliniLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/klini-logo.png"
      alt="Klini"
      style={{ display: "block", width: "80px", height: "80px" }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <KliniLogo />
            <div className="footer-desc">
              La recepcionista de WhatsApp para clínicas medianas y grandes en
              Latinoamérica. Responde lo repetido. Deriva lo que importa.
            </div>
          </div>
          <div className="footer-links">
            <a className="footer-link" href="#">
              Privacidad
            </a>
            <a className="footer-link" href="#">
              Términos
            </a>
            <a className="footer-link" href="mailto:hola@klini.app">
              hola@klini.app
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Klini · Un producto de Texarg</div>
          <div>Hecho con cariño en Buenos Aires.</div>
        </div>
      </div>
    </footer>
  );
}
