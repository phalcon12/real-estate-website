import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">RAB Homes Ng Ltd</Link>
        <nav className="nav" aria-label="Primary Navigation">
          <NavLink to="/properties">Properties</NavLink>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn btn-gold" aria-label="Book Inspection">Book Inspection</a>
        </nav>
      </div>
    </header>
  )
}
