import React from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { URL_VIDEO } from "../../App";
import "./styles.css";

function ModalComponent({ modalIsOpen = false, onCloseModal, info = {} }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      // style={customStyles}
      className="content"
      overlayClassName="modal"
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div>
        <div className="container-text-modal">
          {/* <span style={{fontWeight: 200}}>{info?.name}</span> */}
          <span className="close" onClick={onCloseModal}>
            X
          </span>
        </div>
        <ReactPlayer
          // url={require('../../assets/video.mp4')}
          url={URL_VIDEO+info?.id?.videoId}
          // loop={false}
          config={{
            youtube: {
              playerVars: {
                controls: true,
                autoplay: true
               },
            },
          }}
          className = "video-player"
          volume = {0.3}
          style={{
            width: "100%",
            // height: info?.snippet?.thumbnails.high.height
          }}
        />
      </div>
    </Modal>
  );
}

export default ModalComponent;
