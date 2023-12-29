import React from "react";

// styles
import "./styles.scss";

// data
import socialMediaData from "./socialMediaData";

const Footer = () => {

  const { socialMedia, paymentMethods, companyLogos } = socialMediaData;

  return (
    <footer>
      <section className="footer-newsletter">
        <h2>Receba Nossa Newsletter</h2>
        <div className="newsletter-input">
          <form>
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="footer-links">
        <div className="links-informations">
          <h3>Informações</h3>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>

            <li>
              <a href="#">Prazo de Envio</a>
            </li>

            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>

            <li>
              <a href="#">Promoções e Cupons</a>
            </li>
          </ul>
        </div>

        <div className="links-my-account">
          <h3>
            <a className="open-menu-mobile" href="#">
              Minha Conta
            </a>
          </h3>
          <ul>
            <li>
              <a href="#">Minha Conta</a>
            </li>

            <li>
              <a href="#">Meus Pedidos</a>
            </li>

            <li>
              <a href="#">Cadastre-se</a>
            </li>
          </ul>
        </div>

        <div className="links-where-find">
          <h3>
            <a className="open-menu-mobile" href="#">
              Onde nos Encontrar
            </a>
          </h3>
          <ul>
            <li>
              <a href="#">Lojas</a>
            </li>

            <li>
              <a href="#">Endereço</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer-gray-icons">
        <div className="links-social-networking">
          {socialMedia.map((item, index) => (
            <a key={index} href={item.link}>
              <img
                src={item.image}
                alt={item.name}
              />
            </a>
          ))}
        </div>

        <div className="links-card">
          {paymentMethods.map((item, index) => (
            <a key={index} href={item.link}>
              <img
                src={item.image}
                alt={item.name}
              />
            </a>
          ))}
        </div>

        <div className="links-company">
          {companyLogos.map((item, index) => (
            <a key={index} href={item.link}>
              <img
                src={item.image}
                alt={item.name}
              />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
