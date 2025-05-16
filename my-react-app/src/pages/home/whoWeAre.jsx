import React from "react";
import "./whoWeAreStyles.css";
import we from "./we.png"



function WhoWeAre() {
  return (
    <div className="whowe-container">
        <div className="whowe-content">
            <div className="whowe-image">
                <img src={we} alt="Who We are"></img>
            </div>
            
            <div className="whowe-text">
                <h2>Who We Are</h2>
                <p>
                At SkinVigil, we advance skin health through early detection and prevention. 
                Our experts combine AI technology with medical insights to identify skin concerns before they become serious. 
                Awareness is the first step to protection—because your skin's health matters.
                </p>
                <a href="#">
                    <button className="aboutus-btn">ABOUT US</button>
                </a>
            </div>
        </div>
    </div>

  );

}



export default WhoWeAre;