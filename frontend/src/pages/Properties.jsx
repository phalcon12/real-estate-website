import React, {useEffect} from 'react'
import properties from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function Properties(){
  useEffect(()=>{ document.title = 'RAB Homes — Properties' },[])
  return (
    <section className="container properties-page">
      <div className="section-head">
        <h2>Properties</h2>
        <p className="muted">Explore our portfolio of ultra-luxury homes.</p>
      </div>
      <div className="grid grid-masonry">
        {properties.map(p => (
          <PropertyCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}
