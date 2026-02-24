"use client";
import React from 'react';
import Image from 'next/image';
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section reveal">
      <div className="about-container">
        
        {/* LEVÁ STRANA: Storytelling */}
        <div className="about-content">
          <span className="about-tag">Est. 2026</span>
          <h2 className="about-title">Vedení instinktem</h2>
          
          <div className="about-description">
            <p>
              V <strong>Night Wolf Studiu</strong> nečekáme na to, co přinese zítřek. 
              My si ho bereme. Každý pixel, každý řádek kódu je výsledkem dravosti 
              a technologické preciznosti.
            </p>
            <p>
              Vytvářím digitální ekosystémy, které nejsou jen vidět. Jsou cítit. 
              Moje práce je určena pro ty, kteří chtějí ovládnout svůj revír.
            </p>
          </div>

          <div className="elen-manifest">
            <div className="manifest-header">
              <span className="wolf-icon">🐺</span>
              <h3>Manifest Elen</h3>
            </div>
            <blockquote>
              "Digitální svět nepotřebuje další kopii. Potřebuje identitu, která má vlastní puls a dravost. Moje práce není jen kód a design – je to digitální evoluce, která váš projekt vytáhne ze stínu průměrnosti přímo na vrchol potravního řetězce."
            </blockquote>
          </div>

          <a href="#contact" className="gold-btn about-btn">
            Chci Alpha Strategii
          </a>
        </div>

        {/* PRAVÁ STRANA: Elen (Avatar) */}
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <Image 
              src="/elen.png" 
              alt="Elen - Alpha Identity" 
              fill 
              className="object-cover elen-main-img"
              priority
            />
            
            {/* HUD Overlay pro Elen */}
            <div className="elen-stats-overlay">
              <div className="stat-row">
                <span className="stat-label">SUBJECT:</span>
                <span className="stat-value">ELEN</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">STATUS:</span>
                <span className="stat-value pulse">ACTIVE</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">MODEL:</span>
                <span className="stat-value">ALPHA TYPE C</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;