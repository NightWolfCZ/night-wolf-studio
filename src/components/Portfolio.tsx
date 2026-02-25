"use client";
import "./Portfolio.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Importuj Link pro rychlé přechody

interface Project {
  title: string;
  tag: string;
  image: string;
  processImage: string;
  description: string;
  special?: boolean;
}

// Nový interface pro dema
interface DemoProject {
  title: string;
  tag: string;
  path: string;
  description: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const elenProject: Project = {
    title: "The Birth of Elen",
    tag: "Digital Muse",
    image: "/elen.png",
    processImage: "/na-posteli.png",
    description:
      "Elen nebyla nalezena. Byla stvořena jako dokonalá digitální identita s přirozeným půvabem a precizními detaily.",
    special: true,
  };

  // Definice tvých 3 nových balíčků
  const demoProjects: DemoProject[] = [
    {
      title: "LONE WOLF",
      tag: "Basic Package",
      path: "/demos/lone-wolf",
      description: "Úderný minimalismus pro jednotlivce."
    },
    {
      title: "PACK LEADER",
      tag: "Standard Package",
      path: "/demos/pack-leader",
      description: "Profesionální prezentace pro rostoucí dravce."
    },
    {
      title: "ALPHA PREDATOR",
      tag: "Premium Package",
      path: "/demos/alpha-predator",
      description: "Absolutní digitální dominance bez kompromisů."
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <span className="section-label">Poslední úlovky</span>
      </div>

      {/* Hlavní showcase: ELEN */}
      <div className="portfolio-single-container">
        <div
          className="portfolio-card special-case"
          onClick={() => setSelectedProject(elenProject)}
        >
          <div className="image-container">
            <div className="card-image final">
              <Image src={elenProject.image} alt={elenProject.title} fill className="object-cover" priority />
            </div>
            <div className="card-image process">
              <Image src={elenProject.processImage} alt="Proces" fill className="object-cover" />
            </div>
          </div>
          <div className="card-overlay">
            <div className="overlay-content">
              <span className="card-tag">{elenProject.tag}</span>
              <h3 className="card-title">{elenProject.title}</h3>
              <p className="card-desc">Klikni pro odhalení procesu lovu</p>
            </div>
          </div>
        </div>
      </div>

      {/* NOVÁ SEKCE: BALÍČKY / DEMO WEBY */}
      <div className="portfolio-header" style={{ marginTop: '80px' }}>
        <span className="section-label">Webové Sestavy</span>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginTop: '10px' }}>VYBER SI SVOU ÚROVEŇ</h2>
      </div>

      <div className="demo-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px', 
        padding: '40px 0' 
      }}>
        {demoProjects.map((demo) => (
          <Link href={demo.path} key={demo.title} style={{ textDecoration: 'none' }}>
            <div className="portfolio-card demo-card" style={{ 
              border: '1px solid #1a1a1a', 
              background: '#050505',
              padding: '40px 20px',
              textAlign: 'center',
              transition: '0.3s border-color'
            }}>
              <span style={{ color: '#ca8a04', fontSize: '0.8rem', letterSpacing: '3px' }}>{demo.tag}</span>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', margin: '15px 0' }}>{demo.title}</h3>
              <p style={{ color: '#71717a', fontSize: '0.9rem', marginBottom: '20px' }}>{demo.description}</p>
              <span className="demo-link" style={{ color: '#ca8a04', fontWeight: 'bold' }}>PROHLÉDNOUT DEMO →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal zůstává stejný */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          {/* ... tvůj stávající kód modalu ... */}
        </div>
      )}
    </section>
  );
};

export default Portfolio;