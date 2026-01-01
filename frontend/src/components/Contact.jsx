import React, {useState} from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  function submit(e){
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="contact" className="contact container">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        <form onSubmit={submit} className="contact-form">
          <input placeholder="Your name" required />
          <input placeholder="Email" type="email" required />
          <textarea placeholder="Message" rows="4" required />
          <button className="btn btn-gold">Send Inquiry</button>
          {sent && <p className="muted">Thanks — we will get back to you shortly.</p>}
        </form>
        <div className="contact-info">
          <p><strong>RAB Homes Ng Ltd</strong></p>
          <p>Headquarters: Abuja, Nigeria</p>
          <p>Email: hello@rabhomes.ng</p>
          <p>Phone: +234 800 000 0000</p>
        </div>
      </div>
    </section>
  )
}
