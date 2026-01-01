import React from 'react'
import properties from '../data/properties'
import { Link } from 'react-router-dom'

export default function FeaturedProperties(){
  const featured = properties.slice(0,4)
  return (
    <section className="featured container">
      <div className="section-head">
        <h2>Featured Properties</h2>
        <p className="muted">Handpicked luxury residences available now.</p>
      </div>
      <div className="grid grid-3">
        {featured.map(p => (
          <article key={p.id} className="featured-card in-view">
            <Link to={`/properties/${p.id}`}> 
              <div className="image-wrap">
                <img src={p.images[0]} alt={p.title} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{p.title}</h3>
                <p className="muted">{p.location}</p>
                <p className="price">{p.priceUSD.toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
