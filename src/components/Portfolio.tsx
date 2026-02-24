"use client";
import "./Portfolio.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  tag: string;
  image: string;
  processImage: string;
  description: string;
  special?: boolean;
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

  const project: Project = {
    title: "The Birth of Elen",
    tag: "Digital Muse",
    image: "/elen.png",
    processImage: "/na-posteli.png",
    description:
      "Elen nebyla nalezena. Byla stvořena jako dokonalá digitální identita s přirozeným půvabem a precizními detaily.",
    special: true,
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <span className="section-label">Poslední úlovky</span>
      </div>

      <div className="portfolio-single-container">
        <div
          className="portfolio-card special-case"
          onClick={() => setSelectedProject(project)}
        >
          <div className="image-container">
            {/* Finální verze (spodní vrstva, odhalí se při hoveru) */}
            <div className="card-image final">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>

            {/* Surová verze (horní vrstva, zmizí při hoveru) */}
            <div className="card-image process">
              <Image 
                src={project.processImage} 
                alt="Proces" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="card-overlay">
            <div className="overlay-content">
              <span className="card-tag">{project.tag}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">Klikni pro odhalení procesu lovu</p>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content alpha-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              &times;
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
            </div>

            <div className="comparison-container">
              <div className="compare-item">
                <span className="compare-label">PROCES (CONCEPT)</span>
                <div className="modal-img-wrapper">
                  <Image 
                    src={selectedProject.processImage} 
                    alt="Proces" 
                    width={800} 
                    height={1000} 
                    className="modal-img"
                  />
                </div>
              </div>

              <div className="compare-item">
                <span className="compare-label">VÝSLEDEK (ALPHA)</span>
                <div className="modal-img-wrapper">
                  <Image 
                    src={selectedProject.image} 
                    alt="Final" 
                    width={800} 
                    height={1000} 
                    className="modal-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;