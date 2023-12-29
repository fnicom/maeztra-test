import React from "react";
import { isMobile } from "react-device-detect";

import newCollectionDesktop from "../../assets/collection.png";
import newCollectionMobile from "../../assets/collectionMobile.png";

import "./styles.scss";

const NewCollection = () => {
  return (
    <section className="collection">
      <div className="collection-text">
        <h2 className="collection-title">Lorem ipsum</h2>
        <p className="collection-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>

      <div className="collection-image">
        <img
          className="collection-banner"
          src={isMobile ? newCollectionMobile : newCollectionDesktop}
          alt="new collection"
        />
      </div>
    </section>
  );
};

export default NewCollection;
