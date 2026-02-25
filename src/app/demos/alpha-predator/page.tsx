import React from 'react';

export default function AlphaPredatorDemo() {
  const gold = '#ca8a04';
  const silver = '#e4e4e7';

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'serif' }}>
      
      {/* Hero sekce - Maximální dominance */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        background: 'radial-gradient(circle, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h2 style={{ color: gold, letterSpacing: '8px', fontSize: '0.9rem', marginBottom: '20px', textTransform: 'uppercase' }}>
          The Pinnacle of Digital Art
        </h2>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: '900', lineHeight: '0.8', margin: '0', textTransform: 'uppercase', fontStyle: 'italic' }}>
          ALPHA <br /> PREDATOR
        </h1>
        <div style={{ marginTop: '40px', width: '60px', height: '1px', backgroundColor: gold }}></div>
      </section>

      {/* Sekce "The Philosophy" - Elegantní split layout */}
      <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '60vh', borderTop: '1px solid #18181b' }}>
        <div style={{ flex: '1 1 500px', padding: '10% 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ color: gold, fontSize: '2rem', marginBottom: '30px' }}>ESTETIKA MOCI</h3>
          <p style={{ color: silver, fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '500px' }}>
            V balíčku Alpha Predator neřešíme jen kód. Řešíme váš odkaz. Každý prvek je ručně broušený originál. 
            Tady končí hranice běžného webu a začíná digitální dominance.
          </p>
        </div>
        <div style={{ flex: '1 1 500px', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #18181b' }}>
          <span style={{ color: '#27272a', fontSize: '5rem', fontWeight: 'bold' }}>PREMIUM VISUALS</span>
        </div>
      </section>

      {/* Detailní rozpis - Exkluzivita */}
      <section style={{ padding: '100px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '60px', color: gold }}>FULL DOMINANCE PACKAGE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h4 style={{ color: gold, marginBottom: '15px' }}>Custom Motion</h4>
            <p style={{ color: '#71717a', fontSize: '0.9rem' }}>Animace, které vedou oko zákazníka přesně tam, kam chcete.</p>
          </div>
          <div>
            <h4 style={{ color: gold, marginBottom: '15px' }}>Next-Gen SEO</h4>
            <p style={{ color: '#71717a', fontSize: '0.9rem' }}>Nezůstávejte ve stínu. Budete první, koho trh uvidí.</p>
          </div>
          <div>
            <h4 style={{ color: gold, marginBottom: '15px' }}>24/7 Priority</h4>
            <p style={{ color: '#71717a', fontSize: '0.9rem' }}>Vaše studio, vaše pravidla. Jsme vám k dispozici nonstop.</p>
          </div>
        </div>
      </section>

      {/* Finální výzva - Elegantní a drahá */}
      <section style={{ padding: '150px 20px', textAlign: 'center', backgroundColor: '#050505' }}>
        <p style={{ letterSpacing: '3px', color: gold, marginBottom: '20px' }}>ARE YOU READY TO LEAD?</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '50px' }}>STANE SE VAŠE ZNAČKA ALPHOU?</h2>
        <button style={{ 
          background: 'none', 
          border: `2px solid ${gold}`, 
          color: gold, 
          padding: '20px 60px', 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          transition: '0.3s'
        }}>
          KONTAKTOVAT STUDIO
        </button>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #18181b', color: '#3f3f46' }}>
        NIGHT WOLF STUDIO | THE ALPHA STANDARD 2026
      </footer>
    </div>
  );
}