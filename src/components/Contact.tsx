"use client";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* LEVÁ STRANA: Manifest */}
          <div className="contact-manifest">
            <div className="protocol-badge">PROTOCOL_ALPHA_01</div>
            <h2 className="contact-title uppercase italic">
              Ovládni svůj <span className="gold-text">revír.</span>
            </h2>
            <p className="manifest-text">
              Nehledáme klienty. Hledáme partnery pro digitální dominanci. 
              Zanech stopu a my se ti ozveme, až budeme připraveni k lovu.
            </p>
            <div className="contact-methods">
              <div className="method">
                <span className="label">DIRECT_COM:</span>
                <span className="value">nightwolf.webstudio@gmail.com</span>
              </div>
              <div className="method">
                <span className="label">LOCATION:</span>
                <span className="value">České Budějovice / Remote / Global</span>
              </div>
            </div>
          </div>

          {/* PRAVÁ STRANA: Terminálový formulář (UPRAVENÝ PRO FUNKČNOST) */}
          <div className="contact-form-wrapper">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">WOLF_MESSAGE_STATION</div>
            </div>
            
            {/* Zítra sem do action vložíme ID z Formspree */}
            <form action="https://formspree.io/f/xlgwzdrj" method="POST" className="terminal-form">
              <div className="input-group">
                <label>IDENT_NAME</label>
                <input type="text" name="name" placeholder="Tvůj alias..." required />
              </div>
              
              <div className="input-group">
                <label>IDENT_EMAIL</label>
                <input type="email" name="email" placeholder="kam@odeslat.odpoved..." required />
              </div>

              <div className="input-group">
                <label>SELECT_PACKAGE</label>
                <select name="package" className="terminal-select" style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  color: '#ca8a04',
                  width: '100%',
                  padding: '5px 0',
                  outline: 'none',
                  appearance: 'none'
                }}>
                  <option value="" disabled selected style={{background: '#000'}}>-- VYBER ÚROVEŇ --</option>
                  <option value="lone-wolf" style={{background: '#000'}}>LONE WOLF (BASIC)</option>
                  <option value="pack-leader" style={{background: '#000'}}>PACK LEADER (STANDARD)</option>
                  <option value="alpha-predator" style={{background: '#000'}}>ALPHA PREDATOR (PREMIUM)</option>
                </select>
              </div>
              
              <div className="input-group">
                <label>MISSION_OBJECTIVE</label>
                <textarea name="message" rows={4} placeholder="Popiš svůj cíl / projekt..."></textarea>
              </div>

              <button type="submit" className="terminal-btn">
                [ INITIATE_CONTACT ]
              </button>
            </form>
          </div>
        </div>

        <div className="footer-mini">
          <div className="footer-line"></div>
          <div className="footer-flex">
            <div className="socials">
              <a href="https://www.instagram.com/nightwolf.webstudio/">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
            </div>
            <p className="copyright">© 2026 NIGHT WOLF STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;