"use client";

import React from 'react';
import "./Pricing.css";

const Pricing = () => {
  const tiers = [
    { 
      name: "Lone Wolf", 
      price: "Od 15k", 
      delivery: "3–5 pracovních dnů",
      features: ["Jednostránkový web", "Základní SEO", "Zlatý design"] 
    },
    { 
      name: "Alpha Pack", 
      price: "Od 45k", 
      delivery: "10–14 pracovních dnů",
      features: ["Komplexní systém", "Branding na míru", "Zlatý Glow efekt"] 
    },
    { 
      name: "Wolf VIP", 
      price: "Individuálně", 
      delivery: "Prioritní vývoj",
      features: ["E-Shop / Unikátní systém", "Kompletní branding", "Video produkce", "Servis 24/7"] 
    }
  ];

  const handleOrder = (tierName: string) => {
    const subject = encodeURIComponent(`Poptávka balíčku: ${tierName}`);
    const body = encodeURIComponent(`Dobrý den,\n\nmám zájem o balíček ${tierName}. Ozvěte se mi prosím pro domluvení detailů.`);
    window.location.href = `mailto:nightwolf.webstudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="pricing-section reveal">
      <h2 className="section-label">Investice</h2>
      <div className="pricing-container">
        {tiers.map((t, i) => (
          <div key={i} className={`price-card ${t.name === "Alpha Pack" ? "featured" : ""}`}>
            <h3 className="tier-name">{t.name}</h3>
            <div className="price-value">{t.price}</div>
            
            {/* Nový řádek pro dobu zhotovení */}
            <div className="delivery-tag">
              <span>⚡</span> {t.delivery}
            </div>

            <ul className="tier-features">
              {t.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            
            <button 
              className="gold-btn small" 
              onClick={() => handleOrder(t.name)}
            >
              Poptat
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;