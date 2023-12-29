import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const ShelfProducts = ({ products }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    slidesToShow: !isMobile ? 5 : 1,
    slidesToScroll: !isMobile ? 1 : 1,
    vertical: false,
    lazyLoad: "ondemand",
    arrows: !isMobile,
    dots: false,
  };

  return (
    <div className="container-shelf">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="variations">
              {product.variations.colors.map((color, index) => (
                <span
                  className={`variations-color ${index === 0 ? "active" : ""}`}
                  key={index}
                  style={{ backgroundColor: color, marginRight: "5px" }}
                ></span>
              ))}
            </div>
            <div className="container-price">
              <p className="product-price">R${product.price}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button className="product-button">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShelfProducts;
