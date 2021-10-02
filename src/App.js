

import Scene from '/Users/m/jsxcheckpoint/node_modules/react-video-pop/src/docs/assets/devstories.webm';
import VideoPop from 'react-video-pop';


import './style.css';
import imgSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="gallery"> 
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Adnen Rebhi</h1>
         
        <br />

        <img src={imgSrc} alt="Adnen Rebhi"/>

        <br />
          
        <img src="/imageInPublic.jpg" alt="ReactJS"/>
      </div>
    
      <VideoPop Src="/myVideo.mp4" mute={true} autoplay={true}   root="video-root" ratio={{w:16,h:9}} type="video/mp4" />
      
    </div>
  );
}

export default App;
