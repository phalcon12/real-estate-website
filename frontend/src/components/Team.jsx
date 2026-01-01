import React from 'react'

export default function Team(){
  return (
    <section id="team" className="team container">
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" alt="Rabiu Usman" />
          <h3>Rabiu Usman</h3>
          <p className="muted">Owner</p>
        </div>
        <div className="team-member">
          <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80" alt="Abubakar Abdulsamad" />
          <h3>Abubakar Abdulsamad</h3>
          <p className="muted">Head of Digital Strategy & Technology</p>
        </div>
      </div>
    </section>
  )
}
