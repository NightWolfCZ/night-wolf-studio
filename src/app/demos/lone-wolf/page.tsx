import React from 'react';

export default function LoneWolfDemo() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Sekce */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-5 border-b border-yellow-600/20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          LONE <span className="text-yellow-600">WOLF</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl uppercase tracking-widest">
          Raw style. No compromise. Pure dominance.
        </p>
        <div className="mt-10 animate-bounce text-yellow-600">
          <span className="block w-px h-16 bg-yellow-600 mx-auto"></span>
        </div>
      </section>

      {/* Galerie / Portfolio */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-yellow-600 pl-4">THE WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">Demo Image 1</div>
          <div className="aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">Demo Image 2</div>
        </div>
      </section>

      {/* Ceník */}
      <section className="py-20 bg-zinc-950 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center uppercase">Service Menu</h2>
          <div className="space-y-6">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Classic Cut</span>
              <span className="text-yellow-600">500 CZK</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Beard Trim</span>
              <span className="text-yellow-600">400 CZK</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>The Alpha Treatment</span>
              <span className="text-yellow-600">1200 CZK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-zinc-600 text-sm tracking-widest uppercase">
        Night Wolf Studio © 2026 | Built for winners
      </footer>
    </div>
  );
}