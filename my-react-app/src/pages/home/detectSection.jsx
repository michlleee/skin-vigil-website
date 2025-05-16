import "./detectSectionStyles.css";
import micro from "./micro.png"

function detectSection() {
  return (
    <div className="detect-container">
      <div className="detect-content">
        <div className="detect-text">
          <h2>Detect Skin Cancer</h2>
          <p>
            Early detection saves lives. Upload an image of your skin concern, 
            and our AI-powered analysis will assess potential risks in seconds. 
            Stay informed, stay protected, and take control of your skin health today.
          </p>
          <a href="#">
            <button className="upload-btn">UPLOAD IMAGE</button>
          </a>
        </div>
        <div className="detect-image">
          <img src={micro} alt="Skin Check"></img>
        </div>
      </div>
    </div>
  );
}

export default detectSection;