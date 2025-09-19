import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {
  const navigate = useNavigate();

  const timelineData = [
    { id: 1, year: "", text: "Hemlo", side: "left" },
    { id: 3, year: "", text: "Im here to trouble chimtu", side: "right" },
    { id: 11, year: "", text: "Chimtu left? :(", side: "left" },
    { id: 4, year: "", text: "NO CHIMTU WAS LIVING IN WASHERUM HEHE", side: "right" },
    { id: 5, year: "", text: "and after that she never scared any maws (yes chimtu is a maw)", side: "left" },
    { id: 7, year: "", text: "in my habibi phase hemhellahmadullah not troubling anyone", side: "right" },
    { id: 12, year: "", text: "couldnt be habibi for long and soosed the path of unhabibi mwaheheheh", side: "left" },
    { id: 6, year: "", text: "niggaaaaaaaaa hayeinnn! gang fuck gang fuck bitch", side: "right" },
    { id: 13, year: "", text: "but then janimal was caught on zamra and sent to horny jail", side: "left" },
    { id: 9, year: "", text: "as it was horny jail it was full of chimtus so they help her escape and now she lives a peaceful life with her hubby maw", side: "right" },
    { id: 10, year: "", text: "after that she travelled the world doing no harm to anyone and being a good maw :)", side: "left" },
    { id: 8, year: "", text: "and found a loving bf who loves her to death", side: "right" },
    { id: 14, year: "", text: "Happy tonti my maw i love you so so so much each year you are just becoming more and more perfect not just for me but you as a person as well mwa and i love you again enjoy your day", side: "left" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1 className="timeline-title">Maw becomes smol</h1>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${item.side}`} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={`/${item.id}.jpg`} alt={`Maw at ${item.year}`} />
                <div className="image-overlay">
                  <span className="age-badge">{item.year}</span>
                </div>
              </div>
              <div className="timeline-text">
                <h3 className="timeline-year">{item.year}</h3>
                <p className="timeline-description">{item.text}</p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
