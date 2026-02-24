import React from 'react';
import"./Features.css";

const Features = () => {
  const features = [
    { title: "Design", desc: "Vizuální dominance, která bere dech." },
    { title: "Web", desc: "Neprůstřelné kódy, co fungují všude." },
    { title: "Branding", desc: "Identita, která vyje na měsíc." }
  ];

  return (
    <section id="features" className="features-section reveal">
      <h2 className="section-label">Proč Night Wolf?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="card-border"></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;