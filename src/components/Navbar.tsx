"use client";
import "./Navbar.css";
import Link from 'next/link'; // Zásadní pro plynulé přepínání stránek
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal animace - pokud ji máš na všech stránkách
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          el.classList.add("active");
        }
      });
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <Link href="/" className="logo-link">
          <Image src="/logo.png" alt="Wolf" width={40} height={40} />
          <span>NIGHT WOLF</span>
        </Link>
      </div>
      
      <nav className="nav-links">
        {/* Používáme Link href="/cesta", Next.js to přepne okamžitě */}
        <Link href="/about">O NÁS</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/pricing">CENÍK</Link>
        <Link href="/contact">KONTAKT</Link>
      </nav>
    </header>
  );
}