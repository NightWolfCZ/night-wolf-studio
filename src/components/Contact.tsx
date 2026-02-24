"use client";
import React, { useState } from "react";
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

          {/* PRAVÁ STRANA: Terminálový formulář */}
          <div className="contact-form-wrapper">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">WOLF_MESSAGE_STATION</div>
            </div>
            
            <form className="terminal-form">
              <div className="input-group">
                <label>IDENT_NAME</label>
                <input type="text" placeholder="Tvůj alias..." required />
              </div>
              
              <div className="input-group">
                <label>IDENT_EMAIL</label>
                <input type="email" placeholder="kam@odeslat.odpoved..." required />
              </div>
              
              <div className="input-group">
                <label>MISSION_OBJECTIVE</label>
                <textarea rows={4} placeholder="Popiš svůj cíl / projekt..."></textarea>
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
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">BEHANCE</a>
            </div>
            <p className="copyright">© 2026 NIGHT WOLF STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;