import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BirthdayLanding.css';

const BirthdayLanding = () => {
  const navigate = useNavigate();

  const handleTimelineClick = () => {
    navigate('/timeline');
  };

  return (
    <div className="page-wrapper">
      {/* Main Landing Section */}
      <div className="birthday-container">
        {/* Animated Background */}
        <div className="animated-bg">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`floating-element element-${i % 4}`}></div>
          ))}
        </div>
        
        {/* Confetti */}
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: i % 3 === 0 ? '#87CEEB' : i % 3 === 1 ? '#FFD700' : '#FFF8DC'
            }}></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="content">
          <h1 className="birthday-text">
            <span className="word">HAPPY</span>
            <span className="word">BIRTHDAY</span>
            <span className="word highlight">MAW</span>
          </h1>
          
          {/* Birthday Message Box */}
          <div className="birthday-message-box">
            <div className="message-text">
              Happy birthday to my cutest, prettiest, gorgeous mawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww. HEHE. Babyyyyyyyyyyyy you are 20 i canttt belieb my eyeessss. but still you are always be a smol maw and the smolest maw no matter how old you get. baby :) i loves you i wuvsu (stop smiling u jembi maw). yk maw i had so many thoughts to write about but i forgor all am. (so zori for the tantum) ummmm thes is my jebi so ill write whatever i wam okay she will be hap maw no matter what hehe. my nusi, nushu, nusiaba, wuvsaiba, nushuwarma, nonimem, alibaba, :) ali, gusaiba, guchu, muchu muchu, maw, tantumaw, angymaw, smolmaw, koomtmaw, eempymaw, at this point your last name should be maw. mumtaina afshin nusaiba maw. oh my god soooooo mas big nem like her zee lmaoaoa hehe .my MANZ my handsome hunk of a man shove it in me aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa anyways nebi miw happpiest birthday u cutie muchu muchu. ill give you the paintbrushes u wammed. ill give you the paint u wammed. ill give you the cute art and craft stuff u wammed. ill give you the whole world on this day and everyday tbh. i love you so so so so so so so so so so so so so so so so so so so so so so so so so so so so so so so so sooooooooooooooooooooooooooooooooooooooooooo much ill cry if i think more about how perfect of a fluff you are am and yk babu u r eeping rn because u r a tired maw i miss you i miss you sooo much. happy birthday my baby mawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </div>
          </div>

          {/* XYZ Button */}
          <button className="timeline-button" onClick={handleTimelineClick}>
            XYZ
          </button>
          
          {/* Floating Hearts */}
          <div className="hearts">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="heart" style={{
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`
              }}>💙</div>
            ))}
          </div>
        </div>
        
        {/* Sparkles */}
        <div className="sparkles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}>✨</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayLanding;
