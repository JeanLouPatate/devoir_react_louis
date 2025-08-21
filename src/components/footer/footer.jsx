import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <div className="footer-container container">
        {/* Colonne 1 */}
        <div className="footer-column mb-3">
          <h3>John Doe</h3>
          <address>
            40 rue Laure Diebold <br />
            69009 Lyon, France <br />
            10 20 30 40 50 <br />
            John.doe@gmail.com
          </address>
          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>

        {/* Colonne 2 */}
<div className="col-md-4 mb-3">
  <h4>Liens utiles</h4>
  <ul className="list-unstyled">
    <li><a href="/home" className="footer-link">Accueil</a></li>
    <li><a href="/services" className="footer-link">Services</a></li>
    <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
    <li><a href="/contact" className="footer-link">Me contacter</a></li>
    <li><a href="/mentionslegales" className="footer-link">Mentions légales</a></li>
  </ul>
</div>

        {/* Colonne 3 */}
<div className="footer-column mb-3">
  <h4>Dernières réalisations</h4>
  <ul className="list-unstyled">
    <li><a href="/portfolio" className="invisible-link">Fresh Food</a></li>
    <li><a href="/portfolio" className="invisible-link">Restaurant Akira</a></li>
    <li><a href="/portfolio" className="invisible-link">Espace bien-être</a></li>
    <li><a href="/portfolio" className="invisible-link">SEO</a></li>
    <li><a href="/portfolio" className="invisible-link">Création d'API</a></li>
    <li><a href="/portfolio" className="invisible-link">Maquette d'un site</a></li>
  </ul>
</div>

      </div>
    </footer>
  );
}

export default Footer;
