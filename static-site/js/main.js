// Core interactions: mobile menu, modal property details, intersection animations, contact form handling

document.addEventListener('DOMContentLoaded', function(){
  // set year
  const yearEls = document.querySelectorAll('#year, #year-about, #year-prop, #year-contact');
  yearEls.forEach(el => { if(el) el.textContent = new Date().getFullYear(); })

  // mobile toggle
  const navToggle = document.querySelectorAll('.nav-toggle')
  navToggle.forEach(btn => btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav')
    const expanded = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!expanded))
    nav.style.display = expanded ? '' : 'flex'
  }))

  // in-view observer for subtle animations
  if('IntersectionObserver' in window){
    const els = document.querySelectorAll('.in-view')
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('initialized')
          io.unobserve(e.target)
        }
      })
    },{threshold:0.12})
    document.querySelectorAll('.card, .section').forEach(n=>n.classList.add('in-view'))
    els.forEach(el=>io.observe(el))
  }

  // Property data (for modal details)
  const properties = {
    'amaranta-villa':{
      title:'Amaranta Villa', location:'Abuja, Banex Estate', priceUSD:'$1,250,000', priceNGN:'₦1,150,000,000',
      images:[
        'https://images.unsplash.com/photo-1505691723518-36a2ad1b94a5?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80'
      ],
      desc:'A landmark 5-bedroom villa showcasing Italian craftsmanship and modern finishes. 5,400 sq ft with marble floors, an infinity pool and private cinema.'
    },
    'serengeti-mews':{
      title:'Serengeti Mews', location:'Abuja, Asokoro', priceUSD:'$950,000', priceNGN:'₦874,000,000',
      images:['https://images.unsplash.com/photo-1559599238-b2b1d30b4d9b?auto=format&fit=crop&w=1600&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'],
      desc:'Private gated mews featuring hand-crafted timber, bespoke interiors and manicured courtyards designed for privacy and comfort.'
    },
    'alba-estate':{
      title:'Alba Estate Residence', location:'Abuja, Maitama', priceUSD:'$2,200,000', priceNGN:'₦2,024,000,000',
      images:['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80'],
      desc:'A timeless estate with grand halls, spa facilities and extensive landscaped grounds—ideal for large-scale entertaining.'
    },
    'montclaire-penthouse':{
      title:'Montclaire Penthouse', location:'Abuja, Central Business District', priceUSD:'$1,850,000', priceNGN:'₦1,702,000,000',
      images:['https://images.unsplash.com/photo-1572120360610-d971b9c3a2b6?auto=format&fit=crop&w=1600&q=80'],
      desc:'Skyline penthouse with private rooftop terrace, plunge pool and sweeping city views—urban luxury perfected.'
    },
    'the-vanguard-manor':{
      title:'Vanguard Manor', location:'Abuja, Gudu', priceUSD:'$1,400,000', priceNGN:'₦1,288,000,000',
      images:['https://images.unsplash.com/photo-1540202404-4b3d8e295d0c?auto=format&fit=crop&w=1600&q=80'],
      desc:'Elegant manor with gallery entrance, wine cellar and private tennis court—tailored for dignified living.'
    }
  }

  // modal handling
  const modal = document.getElementById('property-modal')
  const modalContent = modal && modal.querySelector('.modal-content')
  const modalClose = modal && modal.querySelector('.modal-close')

  function openModal(id){
    const p = properties[id]
    if(!p) return
    const html = [`<h3>${p.title}</h3>`, `<p class="muted">${p.location}</p>`, `<p class="price">${p.priceUSD} • ${p.priceNGN}</p>`, `<p>${p.desc}</p>`, '<div class="gallery">', p.images.map(src=>`<img src="${src}" alt="${p.title}" />`).join(''), '</div>', '<div style="margin-top:1rem"><a class="btn btn-gold" href="/contact.html">Book an Inspection</a> <button class="btn btn-outline modal-close">Request Brochure</button></div>' ]
    modalContent.innerHTML = html.join('\n')
    modal.setAttribute('aria-hidden','false')
    document.body.style.overflow = 'hidden'
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true')
    document.body.style.overflow = ''
  }

  document.querySelectorAll('.view-detail').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = btn.getAttribute('data-target')
      openModal(id)
    })
  })

  document.addEventListener('click', (e)=>{
    if(e.target.matches('.modal-close')) closeModal()
    if(e.target === modal) closeModal()
  })

  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal() })

  // contact form handling (demo - no backend)
  const form = document.getElementById('contact-form')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      // simple validation
      const name = form.name.value.trim()
      const email = form.email.value.trim()
      const phone = form.phone.value.trim()
      const message = form.message.value.trim()
      if(!name || !email || !phone || !message){
        alert('Please complete all fields before submitting.')
        return
      }
      // show success message
      const success = document.getElementById('form-success')
      success.hidden = false
      form.reset()
      window.scrollTo({top:success.offsetTop - 120, behavior:'smooth'})
    })
  }

})
