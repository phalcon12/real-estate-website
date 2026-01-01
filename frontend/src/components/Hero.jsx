import React from 'react'

export default function Hero(){
  return (
    <section className="hero container">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="site-title">RAB Homes Ng Ltd</h1>
          <p className="lead">Curating the finest residences in Abuja — bespoke craftsmanship, exceptional privacy, and world-class finishes.</p>
          <div className="hero-ctas">
            <a href="/properties" className="btn btn-outline">Explore Properties</a>
            <a href="#contact" className="btn btn-gold">Book Inspection</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1505691723518-36a2ad1b94a5?auto=format&fit=crop&w=1600&q=80" alt="Luxurious house" />
        </div>
      </div>
    </section>
  )
}
