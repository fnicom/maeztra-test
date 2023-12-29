import React, { useState } from "react";

// imgs
import imgModal from "../../assets/modalImage.png";
import imgNewsletter from "../../assets/newsletter.png";
import iconSend from "../../assets/send.png";

// css
import "./styles.scss";

const Modal = () => {
  
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="close-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
          <div className="modal-content">
            <div className="inside-modal">
              <div className="image-modal">
                <img src={imgModal} alt="man at gym" />
              </div>

              <div className="modal-form">
              <img src={imgNewsletter} alt="email img" className="email-img"/>
                <h2>Bem Vindo à MAEZTRA</h2>
                <p>Receba em Primeira mão </p>
                <strong>desconto e ofertas exclusivas</strong>

                <form>
                  <input type="email" placeholder="Digite seu e-mail" />
                  <button>
                    ENVIAR <img src={iconSend} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
