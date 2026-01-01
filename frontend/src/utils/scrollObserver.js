export default function initInViewObserver(){
  if(typeof window === 'undefined' || !('IntersectionObserver' in window)) return
  const els = document.querySelectorAll('.in-view')
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('initialized')
        // unobserve to run once
        io.unobserve(entry.target)
      }
    })
  },{threshold:0.12})
  els.forEach(el => io.observe(el))
}
