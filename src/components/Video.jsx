import videoFile from "../assets/video/codingOnGroup.mp4";


export default function MyVideo(){
    return (
    
        <div id="header" className="videoContainer">
        <video autoPlay muted loop id="backgroundVideo">
          <source src={videoFile}type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="animatedText">
          <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span> <span>-</span>
          <span> </span>
          <span>P</span><span>r</span><span>é</span><span>f</span><span>o</span><span>r</span><span>m</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
        </div>
      </div>
    )
}