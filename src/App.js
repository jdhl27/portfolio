import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { ContactUs } from "./components/ContactUs";
import FooterComponent from "./components/Footer";
import Main from "./components/Main/Main";
import ModalComponent from "./components/Modal/Modal";
import Navbar from "./components/Nav/Navbar";

const ID_CHANNEL_YOUTUBE = process.env.REACT_APP_ID_CHANNEL_YOUTUBE;
const API_KEY = process.env.REACT_APP_API_KEY_GOOGLE;
const URL_API = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ID_CHANNEL_YOUTUBE}&part=snippet,id&order=date&maxResults=200`;
export const URL_VIDEO = "http://www.youtube.com/watch?v=";

function App() {
  const [y, setY] = useState(window.scrollY);
  const [infoModal, setInfoModal] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [videosData, setVideosData] = useState([]);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      var header = document.getElementById("button-float");
      if (window.scrollY === 0) {
        header.classList.remove("scroll");
      } else if (y < window.scrollY) {
        header.classList.add("scroll");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    if (videosData.length <= 0) {
      fetch(URL_API)
        .then((response) => response.json())
        .then((data) => {
          let arrayTempIdVideos = [];
          data?.items?.forEach((element) => {
            if (element.id.videoId) {
              element = {
                ...element,
                snippet: {
                  ...element?.snippet,
                  thumbnails: {
                    ...element?.snippet?.thumbnails,
                    default: {
                      ...element?.snippet?.thumbnails?.default,
                      url: element?.snippet?.thumbnails?.default?.url?.replace(
                        "default",
                        "sd2"
                      ),
                    },
                  },
                },
              };
              arrayTempIdVideos.push(element);
            }
          });
          setVideosData(arrayTempIdVideos);
        });
    }
  }, []);

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
  });

  return (
    <div className="App">
      <Navbar />
      <Main />
      <a href="#" className="button-float" id="button-float">
        <img src={require("./assets/up-arrow.png")} />
      </a>
      <div id="videos" className="container">
        <h2 className="h2">Videos</h2>
        <div className="line"></div>
        <div className="container-videos-todos">
          {videosData.length > 0 &&
            videosData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="video-container"
                  onClick={() => {
                    setIsOpen(true);
                    setInfoModal(item);
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: item?.snippet?.thumbnails.high.height,
                      backgroundImage: `url(${item?.snippet?.thumbnails.default.url})`,
                      backgroundRepeat: "round",
                    }}
                  ></div>
                  <img src={require("./assets/play.png")} className="play" />
                  <h2 style={{ margin: "15px 0", marginBottom: "5px" }}>
                    {item?.snippet?.title}
                  </h2>
                  {/* <div className="line-title"></div> */}
                  <p style={{ margin: 0 }}> {item?.snippet?.description}</p>
                </div>
              );
            })}
        </div>
        <ModalComponent
          modalIsOpen={modalIsOpen}
          onCloseModal={() => {
            setIsOpen(false);
          }}
          info={infoModal}
        />
      </div>
      {/* <div id="fotos" className="container">
        <h2 className="h2">Fotos</h2>
      </div> */}
      <div id="contacto" className="container">
        <h2 className="h2">Contacto</h2>
        <div className="line"></div>
        <ContactUs />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
