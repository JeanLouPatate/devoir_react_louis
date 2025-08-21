import "../assets/css/services.css";
import bannerImg from "../assets/img/banner.jpg";



function Services() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <div className="service-banner" style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',   // tu peux ajuster la hauteur
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
      </div>


      {/* Contenu principal */}
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center mb-4">Mon offre de services</h1>
          <p className="lead text-center mb-5">
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div className="line"></div>


          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-search" style={{ fontSize: "2rem", color: "#2f83e4" }}></i>
                  <h5 className="card-title">UX Design</h5>
                  <p className="card-text">
                    Aussi appelée design d’expérience, l’UX design est une démarche visant à créer une
                    expérience utilisateur optimale. Cette approche s’appuie une vision holistique de
                    l'expérience utilisateur englobant des sujets tels que l’ergonomie, la psychologie,
                    ou encore la science cognitive.

                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-code-slash" style={{ fontSize: "2rem", color: "#2f83e4" }}></i>
                  <h5 className="card-title">Développement web</h5>
                  <p className="card-text">
                    Un développeur web est un informaticien spécialisé dans la programmation ou
                    expressément impliqué dans le développement des applications du web, ou des
                    applications qui sont exécutées à partir d'un serveur web sur un navigateur web et
                    qui utilisent le protocole HTTP comme vecteur de transmission de l'information.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-envelope" style={{ fontSize: "2rem", color: "#2f83e4" }}></i>
                  <h5 className="card-title">Référencement</h5>
                  <p className="card-text">
                    Le SEO (Search Engine Optimization), ou optimisation pour les moteurs de recherche,
                    désigne l'ensemble des techniques mises en œuvre pour améliorer la position d'un site
                    web dans les résultats des moteurs de recherche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >

    </div >
  );
}

export default Services;
