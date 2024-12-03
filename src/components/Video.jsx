import videoFile from "../assets/video/codingOnGroup.mp4";


export default function MyVideo(){
    return (
    
        <div id="header" className="videoContainer">
        <video autoPlay muted loop id="backgroundVideo">
          <source src={videoFile}type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="typing">
         Formation Préformation
        </div>
      </div>
    )
}