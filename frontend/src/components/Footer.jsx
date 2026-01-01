import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>RAB Homes Ng Ltd</strong>
          <p className="muted">Abuja, Nigeria • © {new Date().getFullYear()}</p>
        </div>
        <div className="social">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
