import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  text-align: -webkit-center;
  background-color: #191d23;
  padding-bottom: 43px;
  .container-video{
    width: 73%
  }
  .container-text{
    position: absolute;
    bottom: 87px;
    text-align: left;
    padding: 13px;

    h1{
      color: white;
      text-decoration-line: underline;
      margin: 0;
    }

    h3{
      color: white;
      margin: 13px 0;
    }
  }
  @media only screen and (max-width: 799px) {
    .container-video{
      width: 100%
    }
  }

  @media all and (max-width: 1400px) and (min-width: 800px){ {
    .container-video{
      width: 94%
    }
  }
`;

function Main({
  title = "Love it",
  description = "Pellentesque habitant morbi tristique senectus"
}) {
  return (
    <Container>
      <div className='container-video'>
        {/* <video className="wp-block-cover__video-background intrinsic-ignore" autoPlay muted loop playsInline src="https://videomakerdemo.files.wordpress.com/2021/11/pexels-videos-2921.mp4"></video> */}
        <ReactPlayer
          // url='https://www.youtube.com/watch?v=GK87AKIPyZY&ab_channel=ResidenteVEVO' 
          url={require('../../assets/video.mp4')}
          loop
          controls
          playing
          muted={true}
          style={{
            objectFit: 'cover',
            WebkitFilter: "grayscale(1)", /* Webkit */
            filter: 'gray', /* IE6-9 */
            filter: "grayscale(1)" /* W3C */,
            width: '100%',
            height: 'initial'
          }}
          width = {'initial'}
          height = {'initial'}
        />
        <div className='container-text'>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </div>
      </div>
    </Container>
  )
}

export default Main