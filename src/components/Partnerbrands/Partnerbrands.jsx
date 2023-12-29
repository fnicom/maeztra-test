import React from "react";

import PartnerbrandsData from "./PartnerbrandsData";

import "./styles.scss"

const Partnerbrands = () => {
  return (
    <section className="brands">
      <div className="brands-title">
        <h3>Marcas Parceiras</h3>
      </div>

      <div className="brands-cards">
        {PartnerbrandsData.map((brand, index) => (
          <img
            key={index}
            className="brand-image"
            src={brand.image}
            alt={brand.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Partnerbrands;
