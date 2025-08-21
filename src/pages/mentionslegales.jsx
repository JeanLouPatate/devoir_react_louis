import { Helmet } from "react-helmet";
import "../assets/css/mentionslegales.css";

function MentionsLegales() {
  return (
    <div className="d-flex flex-column">
      {/* Helmet pour meta noindex */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales</title>
      </Helmet>

      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center mb-4">Mentions légales</h1>
          <div className="line"></div>

          <div className="accordion" id="accordionExample">
            {/* Éditeur du site */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="no-bullets">
                    <li className="john">John Doe</li>
                    <li>
                      <i className="bi bi-geo-alt-fill me-2"></i> 40 rue Laure Diebold
                    </li>
                    <li>
                      <i className="bi bi-pin-fill me-2"></i> 69009 Lyon, France
                    </li>
                    <li>
                      <i className="bi bi-telephone-fill me-2"></i> 10 20 30 40 50
                    </li>
                    <li>
                      <i className="bi bi-envelope-fill me-2"></i> john.doe@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="always">alwaysdata</p>
                  <p>91 rue du faubourg Saint-Honoré, 75006 Paris</p>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe me-2"></i>AlwaysData
                  </a>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                      Centre Européen de formation
                    </a>
                  </p>
                  <p>
                    Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{" "}
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">Pyxabay</a>
                  </p>
                  <p>
                    La favicon de ce site a été fournie par{" "}
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                      John Doe icons ersellt von Freepik - Flaticon
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default MentionsLegales;
