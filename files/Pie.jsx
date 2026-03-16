import "../css/styles.css";

export default function Pie() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logos">
          <img src="./images/muni.png"     alt="Municipalidad Jardín América" />
          <img src="./images/ptzc.png"     alt="Parque Tecnológico" />
          <img src="./images/logo2026.png" alt="Logo 2026" />
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          © 2025 Camino Histórico/Cultural — Jardín América, Misiones, Argentina
        </p>
        <p className="footer-mail">
          Contacto:{" "}
          <a href="mailto:caminohistoricoculturalja@gmail.com">
            caminohistoricoculturalja@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
