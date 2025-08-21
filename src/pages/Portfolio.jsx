import bannerImg from "../assets/img/banner.jpg";

function Portfolio() {
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
          <h1 className="text-center mb-4">Portfolio</h1>
          <p className="lead text-center mb-5">
            Voici quelques unes de mes réalisations
          </p>
          <div className="line"></div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Projet 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Projet 1</h5>
                  <p className="card-text">
                    Description rapide du projet, technologies utilisées et
                    objectifs atteints.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Projet 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Projet 2</h5>
                  <p className="card-text">
                    Description rapide du projet, technologies utilisées et
                    objectifs atteints.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/350x200"
                  className="card-img-top"
                  alt="Projet 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Projet 3</h5>
                  <p className="card-text">
                    Description rapide du projet, technologies utilisées et
                    objectifs atteints.
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

export default Portfolio;
