import "../assets/css/Accueil.css";

// Import des images
import heroImg from "../assets/img/hero-bg.jpg";
import johnDoeImg from "../assets/img/john-doe-about.jpg";

function Accueil() {
  return (
    <>

      {/* Section Hero */}
      <div
        className="home text-center d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          marginTop: 0,
        }}
      >
        <p className="hh1">Bonjour, je suis John DOE</p>
        <p className="hh2">Développeur web full stack</p>
        <button
          className="btn_home"
          data-bs-toggle="modal"
          data-bs-target="#infoModal"
        >
          En savoir plus
        </button>
      </div>

      {/* Modale Bootstrap */}
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">
                À propos de John DOE
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-3">
                <img
                  src={johnDoeImg}
                  alt="Avatar John Doe"
                  className="img-fluid rounded-circle"
                  style={{ width: "100px" }}
                />
              </div>
              <p><strong>Nom :</strong> John Doe</p>
              <p><strong>Bio :</strong> As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</p>
              <p><strong>Repos publics :</strong> 1 | <strong>Followers :</strong> 16 | <strong>Following :</strong> 0</p>
              <p><strong>Date de création :</strong> 09/06/2016</p>
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark w-100"
              >
                Voir sur GitHub
              </a>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section À propos + Compétences */}
      <section className="container my-5">
        <div className="bg-white rounded shadow p-4">
          <div className="row">
            {/* À propos */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="title-with-bar">À propos</h3>
              <img
                src={johnDoeImg}
                alt="Photo de John Doe"
                className="img-fluid mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                magnam sunt animi fuga dolore ad tempora in magni eum repellendus.
                Quae totam ea earum facere architecto, atque eos in.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                magnam sunt animi fuga dolore ad tempora in magni eum repellendus.
                Quae totam ea earum facere architecto, atque eos in.
              </p>
            </div>

            {/* Compétences */}
            <div className="col-md-6">
              <h3 className="title-with-bar">Mes compétences</h3>

              <label>HTML5 90%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <label>CSS 80%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <label>JAVASCRIPT 70%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <label>PHP 60%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <label>REACT 50%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Accueil;
