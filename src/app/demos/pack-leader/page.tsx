import React from 'react';

export default function PackLeaderDemo() {
  const gold = '#ca8a04';
  const dark = '#09090b';

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navigace ukázky */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${gold}33` }}>
        <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>PACK LEADER / STUDIO</span>
        <span style={{ color: gold }}>MENU</span>
      </nav>

      {/* Hero sekce s textem na straně */}
      <section style={{ height: '80vh', display: 'flex', alignItems: 'center', padding: '0 10%' }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '5rem', lineHeight: '0.9', marginBottom: '20px' }}>
            BEYOND <br /> <span style={{ color: gold }}>LIMITS.</span>
          </h1>
          <p style={{ color: '#a1a1aa', fontSize: '1.1rem', borderLeft: `2px solid ${gold}`, paddingLeft: '20px' }}>
            Kompletní digitální identita pro ty, kteří chtějí vést, ne následovat. 
            Tenhle balíček obsahuje vše od designu po SEO.
          </p>
        </div>
      </section>

      {/* Grid Portfolio - Více fotek */}
      <section style={{ padding: '100px 5%', backgroundColor: dark }}>
        <h2 style={{ fontSize: '0.8rem', letterSpacing: '5px', color: gold, marginBottom: '30px' }}>SELECTED PROJECTS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ aspectRatio: '1/1', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              PROJECT 0{i}
            </div>
          ))}
        </div>
      </section>

      {/* Sekce s výhodami */}
      <section style={{ padding: '100px 10%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ color: gold }}>STRATEGY</h3>
            <p style={{ color: '#71717a' }}>Každý pixel má svůj účel. Stavíme weby, které nejen vypadají, ale i vydělávají.</p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ color: gold }}>PERFORMANCE</h3>
            <p style={{ color: '#71717a' }}>Blesková rychlost na všech zařízeních. Vaši klienti nebudou čekat ani vteřinu.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px', textAlign: 'center', borderTop: '1px solid #18181b' }}>
        <button style={{ backgroundColor: gold, color: '#000', padding: '15px 40px', fontWeight: 'bold', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
          Chci takový web
        </button>
      </footer>
    </div>
  );
}