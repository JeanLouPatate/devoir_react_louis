import bannerImg from "../assets/img/banner.jpg";
import "../assets/css/contact.css";

function Contact() {
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
      <h1 className="text-center mb-4">Contact</h1>
      <p className="lead text-center mb-5">
        Pour me contacter en vue d'un entretien d'embauche ou d'une future collaboration merci de remplir le formulaire de contact.
      </p>
      <div className="line"></div>

      <main className="flex-grow-1">
        <section className="box">

<div className="formulaire">
  <h2>Formulaire de contact</h2>
  <div className="liner"></div>
  <div className="col-md-8">
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" placeholder="Votre email" required />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Numéro de téléphone
        </label>
        <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required />
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Sujet
        </label>
        <input type="text" className="form-control" id="subject" placeholder="Sujet de votre message" required />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" id="message" rows="5" placeholder="Votre message" required></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  </div>
</div>



          <div className="formulaire">
            <h2>Mes coordonnées</h2>
                  <div className="liner"></div>

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

            <div className="map-container">
  <iframe
    title="Adresse John Doe"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.123456789!2d4.812345!3d45.779012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c3abcd1234%3A0xabcdef123456!2s40+Rue+Laure+Diebold%2C+69009+Lyon%2C+France!5e0!3m2!1sfr!2sfr!4v1690000000000"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>



          </div>

        </section>
      </main>

    </div>
  );
}

export default Contact;
