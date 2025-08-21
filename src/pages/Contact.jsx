import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center mb-4">Contact</h1>
          <p className="lead text-center mb-5">
            Vous pouvez me contacter via ce formulaire ou par email.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="Votre email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Votre message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
