// src/app/components/Cursor.tsx
"use client";
import { useEffect, useState } from "react";
import "./Cursor.css"; // Tady máš to svoje vyladěné CSS

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor" 
      style={{ 
        position: 'fixed', // Jistota
        left: `${mousePos.x}px`, 
        top: `${mousePos.y}px`,
        pointerEvents: 'none', // Tohle tam musí být!
        zIndex: 99999
      }} 
    />
  );
}