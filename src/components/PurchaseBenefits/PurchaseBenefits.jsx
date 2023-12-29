import React from "react";

import benefitsData from "./benefitsData";

import "./styles.scss"

const PurchaseBenefits = () => {
  return (
    <section className="offers">
      <div className="offers-title">
        <h3>Por que comprar na Maeztra</h3>
      </div>

      <div className="offers-cards">
        {benefitsData.map((offer, index) => (
          <div key={index} className="card">
            <img className="card-img" src={offer.image} alt={offer.title} />
            <div className="card-containerTitle">
              <h4 className="card-title">{offer.title}</h4>
              <p className="card-subtitle">{offer.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchaseBenefits;
