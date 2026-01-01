import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties'

export default function PropertyDetail(){
  const { id } = useParams()
  const p = properties.find(x => x.id === id)
  useEffect(()=>{ if(p) document.title = `${p.title} — RAB Homes` },[p])
  if(!p) return <div className="container"><p>Property not found.</p></div>

  return (
    <section className="container property-detail">
      <Link to="/properties" className="back">← Back to Properties</Link>
      <div className="detail-grid">
        <div className="gallery">
          {p.images.map((src,i)=> (
            <div key={i} className="gallery-item">
              <img src={src} alt={`${p.title} ${i+1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="detail">
          <h1>{p.title}</h1>
          <p className="muted">{p.location}</p>
          <div className="price">
            <strong>{p.priceUSD.toLocaleString('en-US',{style:'currency',currency:'USD'})}</strong>
            <div className="muted">{p.priceNGN.toLocaleString('en-NG',{style:'currency',currency:'NGN'})}</div>
          </div>
          <p className="lead">{p.description}</p>
          <ul className="feature-list">
            {p.features.map(f => <li key={f}>{f}</li>)}
          </ul>
          <div className="detail-actions">
            <a href="#contact" className="btn btn-gold">Book Inspection</a>
            <a href="#" className="btn btn-outline">Request Brochure</a>
          </div>
        </div>
      </div>
    </section>
  )
}
