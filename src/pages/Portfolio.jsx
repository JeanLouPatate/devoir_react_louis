import React from "react";
import "../assets/css/portfolio.css";

// Import des images
import card1Img from "../assets/img/fresh-food.jpg";
import card2Img from "../assets/img/restaurant-japonais.jpg";
import card3Img from "../assets/img/espace-bien-etre.jpg";
import card4Img from "../assets/img/seo.jpg";
import card5Img from "../assets/img/coder.jpg";
import card6Img from "../assets/img/screens.jpg";

function ServiceCards() {
  const cards = [
    {
      title: "Fresh Food",
      text: "Site e-commerce spécialisé dans la vente de produits frais locaux.",
      info: "Technologies : React, Node.js, Stripe",
      image: card1Img,
    },
    {
      title: "Sushi Shop",
      text: "Plateforme de livraison à domicile pour un restaurant japonais.",
      info: "Technologies : Vue.js, Firebase, Google Maps API",
      image: card2Img,
    },
    {
      title: "Espace Bien-être",
      text: "Site vitrine pour une boutique de produits bien-être et cosmétiques.",
      info: "Technologies : WordPress, WooCommerce",
      image: card3Img,
    },
    {
      title: "SEO",
      text: "Optimisation du référencement pour améliorer la visibilité d’un site e-commerce.",
      info: "Techniques : SEO on-page, backlinks, optimisation ",
      image: card4Img,
    },
    {
      title: "Création d'une API",
      text: "Développement d’une API RESTful publique pour gérer des données clients.",
      info: "Technologies : Node.js, Express, MongoDB",
      image: card5Img,
    },
    {
      title: "Prototype Web",
      text: "Maquette et prototype interactif d’un site web pour une startup.",
      info: "Outils : Figma, Adobe XD, Responsive Design",
      image: card6Img,
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Portfolio</h1>
      <p className="lead text-center mb-5">
        Voici quelques-unes de mes réalisations
      </p>
      
      <div
        className="line mb-5"
        style={{
          width: "150px",
          height: "6px",
          backgroundColor: "#5bc0eb",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      ></div>

      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-4 mb-4 d-flex flex-column"
          >
            <div className="card h-100 card-hover">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.text}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>

            {/* Encadré sous la carte */}
            <div
              className="border p-2 text-center"
              style={{
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
                marginTop: "-1px", // touche le bas de la card
              }}
            >
              {card.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
