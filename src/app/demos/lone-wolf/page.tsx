import React from 'react';

export default function LoneWolfDemo() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Hero Sekce */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '20px', 
        borderBottom: '1px solid rgba(202, 138, 4, 0.2)' 
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', letterSpacing: '-2px', margin: '0' }}>
          LONE <span style={{ color: '#ca8a04' }}>WOLF</span>
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '4px', marginTop: '10px' }}>
          Raw style. No compromise.
        </p>
      </section>

      {/* Galerie */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', borderLeft: '4px solid #ca8a04', paddingLeft: '15px', marginBottom: '40px' }}>
          THE WORK
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ aspectRatio: '16/9', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
            DEMO WORK 1
          </div>
          <div style={{ aspectRatio: '16/9', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
            DEMO WORK 2
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section style={{ padding: '80px 20px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '40px' }}>Service Menu</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #27272a', paddingBottom: '10px' }}>
              <span>Classic Cut</span>
              <span style={{ color: '#ca8a04' }}>500 CZK</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #27272a', paddingBottom: '10px' }}>
              <span>Beard Trim</span>
              <span style={{ color: '#ca8a04' }}>400 CZK</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #27272a', paddingBottom: '10px' }}>
              <span>Alpha Treatment</span>
              <span style={{ color: '#ca8a04' }}>1200 CZK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', color: '#52525b', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
        Night Wolf Studio © 2026
      </footer>
    </div>
  );
}