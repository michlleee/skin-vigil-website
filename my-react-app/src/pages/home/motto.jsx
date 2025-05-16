import "./mottoStyles.css";
import checkSkin from "./checkSkin.png";
import Typewriter from "../../components/Typewriter/Typewriter";

function motto(){
    return(
        <div className="div-motto">
            <section className="motto">
                <Typewriter className="motto-text"
                    text="Stay vigilant and protect your skin." 
                    speed={70} 
                    pauseTime={4000} 
                    deleteSpeed={50}
                />
                <div className="image-container">
                    <img src={checkSkin} alt="Skin Check" className="skin-img" />
                </div>
            </section>
        </div>
    );
}
export default motto;

/**
 * document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".fade-in-up-scroll");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    contents.forEach((content) => {
      observer.observe(content);
    });
  });

.fade-in-up-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s, transform 0.6s;
}
  
.fade-in-up-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
 */