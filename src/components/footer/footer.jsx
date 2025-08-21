import "./footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-light w-100 py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-4 mb-3">
            <h3>John Doe</h3>
            <address>
              40 rue Laure Diebold <br />
              69009 Lyon, France <br />
              10 20 30 40 50 <br />
              John.doe@gmail.com
            </address>
            <div className="d-flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-light"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-light"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-light"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-3">
            <h4>Liens utiles</h4>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-3">
            <h4>Dernières réalisations</h4>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
