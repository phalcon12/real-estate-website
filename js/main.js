// main.js — Mobile nav, modal details, in-view animations, contact form (client-side demo)

document.addEventListener('DOMContentLoaded', function(){
  // set years
  document.querySelectorAll('#year, #year-about, #year-prop, #year-contact').forEach(el=>{ if(el) el.textContent = new Date().getFullYear() })

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle')
  let mobileNav
  navToggle && navToggle.addEventListener('click', ()=>{
    const expanded = navToggle.getAttribute('aria-expanded') === 'true'
    navToggle.setAttribute('aria-expanded', String(!expanded))
    if(!mobileNav){
      mobileNav = document.createElement('div')
      mobileNav.className = 'mobile-nav'
      mobileNav.innerHTML = '<nav class="nav-links" aria-label="Mobile"><a href="/">Home</a><a href="/about.html">About Us</a><a href="/properties.html">Properties</a><a href="/contact.html">Contact</a><button class="btn btn-outline nav-close">Close</button></nav>'
      document.body.appendChild(mobileNav)
      mobileNav.querySelector('.nav-close').addEventListener('click', ()=> mobileNav.classList.remove('open'))
      mobileNav.addEventListener('click', (e)=>{ if(e.target === mobileNav) mobileNav.classList.remove('open') })
    }
    mobileNav.classList.toggle('open')
  })

  // in-view observer
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('initialized'); io.unobserve(e.target) } })
    },{threshold:0.12})
    document.querySelectorAll('.in-view').forEach(el=> io.observe(el))
  }

  // Property details data
  const properties = {
    'amaranta-villa':{
      title:'Amaranta Villa', location:'Abuja, Banex Estate', priceUSD:'$1,250,000', priceNGN:'₦1,150,000,000',
      images:['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80','https://images.unsplash.com/photo-1505691723518-36a2ad1b94a5?auto=format&fit=crop&w=1600&q=80'],
      desc:'An exceptional 5-bedroom villa spanning 5,400 sq ft with marble finishes, an infinity pool, private cinema, and bespoke fixtures throughout.'
    },
    'serengeti-mews':{
      title:'Serengeti Mews', location:'Abuja, Asokoro', priceUSD:'$950,000', priceNGN:'₦874,000,000',
      images:['https://images.unsplash.com/photo-1559599238-b2b1d30b4d9b?auto=format&fit=crop&w=1600&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'],
      desc:'A sophisticated private gated mews offering sanctuary, hand-crafted timber, and manicured courtyards.'
    },
    'alba-estate':{
      title:'Alba Estate Residence', location:'Abuja, Maitama', priceUSD:'$2,200,000', priceNGN:'₦2,024,000,000',
      images:['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80'],
      desc:'A timeless estate with landscaped grounds, private spa, and grand entertaining spaces across 8,000 sq ft.'
    },
    'montclaire-penthouse':{
      title:'Montclaire Penthouse', location:'Abuja, Central Business District', priceUSD:'$1,850,000', priceNGN:'₦1,702,000,000',
      images:['https://images.unsplash.com/photo-1572120360610-d971b9c3a2b6?auto=format&fit=crop&w=1600&q=80'],
      desc:'A skyline penthouse with private rooftop terrace, plunge pool and panoramic views — urban luxury perfected.'
    },
    'the-vanguard-manor':{
      title:'Vanguard Manor', location:'Abuja, Gudu', priceUSD:'$1,400,000', priceNGN:'₦1,288,000,000',
      images:['https://images.unsplash.com/photo-1540202404-4b3d8e295d0c?auto=format&fit=crop&w=1600&q=80'],
      desc:'An elegant manor with gallery entrance, wine cellar and private tennis court tailored for dignified living.'
    }
  }

  // modal handling
  const modal = document.getElementById('property-modal')
  const modalContent = modal && modal.querySelector('.modal-content')
  let lastActiveTrigger = null

  function openModal(id, trigger){
    const p = properties[id]
    if(!p) return
    const html = [`<h3 id="property-title">${p.title}</h3>`, `<p class="muted">${p.location}</p>`, `<p class="price">${p.priceUSD} • ${p.priceNGN}</p>`, `<p>${p.desc}</p>`, '<div class="gallery">', p.images.map(s=>`<img src="${s}" alt="${p.title}" />`).join(''), '</div>', '<div style="margin-top:1rem"><a class="btn btn-gold" href="/contact.html">Book an Inspection</a> <button class="btn btn-outline modal-close">Request Brochure</button></div>' ]
    modalContent.innerHTML = html.join('\n')
    modal.setAttribute('aria-hidden','false')
    modal.setAttribute('aria-labelledby','property-title')
    document.body.style.overflow = 'hidden'
    // focus close button for accessibility
    const closeBtn = modal.querySelector('.modal-close')
    if(closeBtn) closeBtn.focus()
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true')
    modal.removeAttribute('aria-labelledby')
    document.body.style.overflow = ''
    if(lastActiveTrigger){
      try{ lastActiveTrigger.setAttribute('aria-expanded','false'); lastActiveTrigger.focus() } catch(e){}
      lastActiveTrigger = null
    }
  }

  // view-detail buttons: ensure accessibility attributes and wire click handlers
  document.querySelectorAll('.view-detail').forEach(btn=>{
    btn.setAttribute('type','button')
    btn.setAttribute('aria-controls','property-modal')
    btn.setAttribute('aria-expanded','false')
    btn.addEventListener('click', (e)=>{ lastActiveTrigger = e.currentTarget; e.currentTarget.setAttribute('aria-expanded','true'); openModal(e.currentTarget.dataset.target, e.currentTarget) })
  })

  // also make entire card clickable (clicking image or title opens details)
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',(e)=>{
      if(e.target.closest('button')) return // let button handle it
      const id = card.dataset.id
      if(!id) return
      // prefer the button inside card as the focused element to restore focus later
      const btn = card.querySelector('.view-detail')
      lastActiveTrigger = btn || null
      if(btn) btn.setAttribute('aria-expanded','true')
      openModal(id)
    })
  })

  document.addEventListener('click', (e)=>{ if(e.target.matches('.modal-close')) closeModal(); if(e.target === modal) closeModal() })
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal() })

  // contact form (demo only)
  const form = document.getElementById('contact-form')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const name = form.name.value.trim(); const email = form.email.value.trim(); const phone = form.phone.value.trim(); const message = form.message.value.trim()
      if(!name || !email || !phone || !message){ alert('Please complete all fields before submitting.'); return }
      const success = document.getElementById('form-success')
      success.hidden = false; form.reset(); window.scrollTo({top: success.offsetTop - 120, behavior: 'smooth'})
    })
  }

})
