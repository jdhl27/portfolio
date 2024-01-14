import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { URL_VIDEO } from "../../App";
import { FaTimes } from 'react-icons/fa';
import "./styles.css";

function ModalComponent({ modalIsOpen = false, onCloseModal, info = {} }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      className="content"
      overlayClassName="modal"
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div>
        <div className="container-text-modal">
          <span className="close" onClick={onCloseModal}>
            <FaTimes />
          </span>
        </div>
        <ReactPlayer
          url={URL_VIDEO + info?.id?.videoId}
          config={{
            youtube: {
              playerVars: {
                controls: true,
                autoplay: true,
              },
            },
          }}
          className="video-player"
          volume={0.5}
          style={{
            width: "100%",
          }}
        />
      </div>
    </Modal>
  );
}

export default ModalComponent;
