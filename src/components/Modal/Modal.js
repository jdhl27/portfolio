import React from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './styles.css';

function ModalComponent({
  modalIsOpen = false,
  onCloseModal,
  info = {}
}) {
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
      <div style={{padding: '11px'}}>
        <div className='container-text-modal'>
          <span style={{fontWeight: 200}}>{info?.name}</span>
          <span className='close' onClick={onCloseModal}>X</span>
        </div>
        <ReactPlayer
          url={require('../../assets/video.mp4')}
          loop={false}
          controls
          playing={true}
          // muted={true}
          volume = {0.3}
          style={{
            objectFit: 'cover',
            width: '80%',
            height: 'initial'
          }}
          width={'initial'}
          height={'initial'}
        />
      </div>
    </Modal>
  )
}

export default ModalComponent