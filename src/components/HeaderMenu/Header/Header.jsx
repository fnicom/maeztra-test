import React, { useState, useEffect } from "react";

// components
import Button from "../ButtonSearch/Button";
import SearchBar from "../ButtonSearch/SearchBar";
import IconAndLink from "../IconAndLink/IconAndLink";

// imgs
import menuLogo from "../../../assets/logo-maeztra.png";
import myAccoutnIcon from "../../../assets/user.png";
import wishListIcon from "../../../assets/wishlist.png";
import miniCartIcon from "../../../assets/cart.png";
import menuSearchIcon from "../../../assets/icon-search.png";
import drawerIcon from "../../../assets/drawer-menu.png";

// styles
import "./styles.scss";

// data 
import menuItems from "./menuItems"

const Header = () => {
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

  return !isMobile ? (
    <div className="header">
      <div className="header-promocoes">
        <p>
          <a href="/">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </a>
        </p>
      </div>
      <div className="main-header">
        <div className="hidden-not-hidden">
          <img
            className="header-logo-maeztra"
            src={menuLogo}
            alt="logo maeztra"
          />
        </div>

        <form className="header-form-search">
          <SearchBar placeholder="O Que Você Busca?" />
          <Button text="Buscar" bold="true" />
        </form>

        <div className="header-href-links">
          <IconAndLink
            text="Minha Conta"
            img={myAccoutnIcon}
            link="/myaccount"
          />
          <IconAndLink text="Minha Lista" img={wishListIcon} link="/mylist" />
          <IconAndLink
            text="Meu Carrinho"
            img={miniCartIcon}
            link="/mycard"
            border="true"
          />
        </div>
      </div>
      <div className="main-header-sub">
        <div className="header-menu">
          <nav className="menus">
            <ul className="options">
              {menuItems.map((item) => (
                <li key={item.id} className="options-item">
                  <a href="#">
                    {item.icon && <img src={item.icon} alt={item.label} />}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  ) : (
    <div className="header">
      <div className="header-promocoes">
        <p>
          <a href="/">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </a>
        </p>
      </div>

      <div className="header-menu-mob">
        <div className="header-menu-mob-1">
          <IconAndLink text="" img={drawerIcon} link="/" border="true" />

          <div className="hidden-not-hidden">
            <img
              className="header-logo-maeztra"
              src={menuLogo}
              alt="logo maeztra"
            />
          </div>
        </div>

        <div className="header-menu-mob-2">
          <IconAndLink text="" img={menuSearchIcon} link="/" border="true" />
          <IconAndLink text="" img={miniCartIcon} link="/" border="true" />
        </div>
      </div>
    </div>
  );
};

export default Header;
