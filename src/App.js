import { useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import Main from './components/Main/Main';
import ModalComponent from './components/Modal/Modal';
import Navbar from './components/Nav/Navbar';
import { videos } from './dataVideos';

function App() {

  const [y, setY] = useState(window.scrollY);
  const [videoPlay, setVideoPlay] = useState(null)
  const [infoModal, setInfoModal] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);
  const playerVideo = useRef()

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      var header = document.getElementById("button-float");
      if (window.scrollY == 0) {
        header.classList.remove("scroll");
      } else if (y < window.scrollY) {
        header.classList.add("scroll");
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  })
  

  // const ref = (player) => {
  //   playerVideo = player
  // }

  return (
    <div className="App">
      <Navbar />
      <Main />
      <a href='#' className='button-float' id='button-float'>
        {/* <img src={require('./assets/arrow-up.png')} /> */}
        <img src={require('./assets/up-arrow.png')} />
      </a>
      <div id='videos' className='container'>
        <h2>Videos</h2>
        <div className='container-videos-todos'>
          {
            videos.map((item, i) => (
              <div 
                key={i} 
                className='video-container' 
                onClick={() => {
                  setIsOpen(true)
                  setInfoModal(item)
                }}
                onMouseOver={()=> {
                  setVideoPlay(i)
                }}
                onMouseOut={()=> {
                  setVideoPlay(null)
                  playerVideo.current.seekTo(0)
                }}
              >
                <ReactPlayer
                  url={require('./assets/video.mp4')}
                  ref = {playerVideo}
                  loop = {false}
                  // controls
                  playing = { videoPlay == i}
                  muted={true}
                  style={{
                    objectFit: 'cover',
                    // WebkitFilter: videoPlay == i ? "grayscale(0)" : "grayscale(1)", /* Webkit */
                    // filter: videoPlay == i ? "grayscale(0)" : "grayscale(1)" /* W3C */,
                    width: '100%',
                    height: 'initial'
                  }}
                  width = {'initial'}
                  height = {'initial'}
                />
                <img
                  src={require('./assets/play.png')} 
                  className="play"/>
                <h2 style={{margin: "15px 0"}}>{item?.name}</h2>
                <p style={{margin: 0}}> {item?.description}</p>
              </div>
            ))
          }
        </div>
        <ModalComponent 
          modalIsOpen = {modalIsOpen}
          onCloseModal = {() => {
            setIsOpen(false)
          }}
          info = {infoModal}
        />
      </div>
      <div id='fotos' className='container'>
        <p>wqetesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
    </div>
  );
}

export default App;
