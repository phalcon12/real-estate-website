import React from 'react'
import { Link } from 'react-router-dom'

export default function PropertyCard({p}){
  const usd = p.priceUSD.toLocaleString('en-US', {style:'currency', currency:'USD'})
  const ngn = p.priceNGN.toLocaleString('en-NG', {style:'currency', currency:'NGN'})

  return (
    <article className="property-card in-view">
      <Link to={`/properties/${p.id}`} className="media-link">
        <div className="image-wrap">
          <img src={p.images[0]} alt={p.title} loading="lazy" />
          <div className="card-badge">{p.location.split(',')[0]}</div>
        </div>
      </Link>
      <div className="card-body">
        <h3>{p.title}</h3>
        <p className="muted">{p.location}</p>
        <p className="short">{p.short}</p>
        <div className="price">
          <span className="usd">{usd}</span>
          <span className="ngn">{ngn}</span>
        </div>
        <div className="card-actions">
          <Link to={`/properties/${p.id}`} className="btn btn-outline">View Details</Link>
          <a href="#contact" className="btn btn-gold">Book Inspection</a>
        </div>
      </div>
    </article>
  )
}
