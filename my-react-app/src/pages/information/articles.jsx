import { useRef } from "react";
import './articlesStyles.css';
import cdcImg from './informationImages/CDC.png';
import wcrfImg from './informationImages/WorldCancerResearchFund.png';
import whoImg from './informationImages/WorldHealthOrganization.png';
import nihImg from './informationImages/NationalCancerInstitute.png';
import tsImg from './informationImages/TheSun.png';

const Articles = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('active');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="article-section">
      <h2 className="article-title">Famous Articles</h2>
      <div
        className="articles-scroll"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
      <div className="article-card" onClick={() => window.open('https://www.cdc.gov/skin-cancer/prevention/index.html', '_blank')} style={{ cursor: 'pointer' }}>
          <img src={cdcImg} alt="Article 1" className="article-image" />
        </div>
        <div className="article-card" onClick={() => window.open('https://www.wcrf.org/preventing-cancer/topics/sun-uv-rays-and-cancer/', '_blank')} style={{ cursor: 'pointer' }}>
          <img src={wcrfImg} alt="Article 2" className="article-image" />
        </div>
        <div className="article-card" onClick={() => window.open('https://www.who.int/news-room/questions-and-answers/item/radiation-protecting-against-skin-cancer', '_blank')} style={{ cursor: 'pointer' }}>
          <img src={whoImg} alt="Article 3" className="article-image" />
        </div>
        <div className="article-card" onClick={() => window.open('https://www.cancer.gov/types/skin/patient/skin-prevention-pdq', '_blank')} style={{ cursor: 'pointer' }}>
          <img src={nihImg} alt="Article 4" className="article-image" />
        </div>
        <div className="article-card"onClick={() => window.open('https://www.thesun.co.uk/health/34728569/how-many-sunburns-double-risk-melanoma-skin-cancer/', '_blank')} style={{ cursor: 'pointer' }}>
          <img src={tsImg} alt="Article 5" className="article-image" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
