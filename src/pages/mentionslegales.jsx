import React from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

function MentionsLegales() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center mb-4">Mentions légales</h1>

          <p>
            Conformément à la loi française, voici les informations légales concernant ce site :
          </p>

          <h5>Éditeur du site :</h5>
          <p>
            John Doe <br />
            40 rue Laure Diebold <br />
            69009 Lyon, France <br />
            Email : John.doe@gmail.com
          </p>

          <h5>Hébergement :</h5>
          <p>
            Le site est hébergé par : <br />
            Nom de l’hébergeur <br />
            Adresse de l’hébergeur <br />
            Contact de l’hébergeur
          </p>

          <h5>Propriété intellectuelle :</h5>
          <p>
            L’ensemble du contenu de ce site (textes, images, logos, vidéos, …) est la propriété de John Doe ou de ses partenaires et est protégé par le droit d’auteur.
          </p>

          <h5>Protection des données :</h5>
          <p>
            Les informations collectées via le site sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MentionsLegales;
