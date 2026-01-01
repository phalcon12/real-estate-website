import { useEffect } from 'react'

export default function ChatWidget(){
  useEffect(()=>{
    // avoid adding multiple times
    if(window.__convai_widget_injected) return
    window.__convai_widget_injected = true

    // load the ConvAI embed script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed@beta'
    script.async = true
    script.type = 'text/javascript'
    script.onload = () => {
      try{
        // create widget element
        const el = document.createElement('elevenlabs-convai')
        el.setAttribute('agent-id', 'agent_6001kdmg0m2vepfahqrvk1sxmf1e')
        // style as a floating button/widget in bottom-right
        el.style.position = 'fixed'
        el.style.bottom = '24px'
        el.style.right = '24px'
        el.style.zIndex = '9999'
        el.setAttribute('aria-label','RAB Homes Assistant')
        document.body.appendChild(el)

        // fetch the site context we prepared
        fetch('/assistant-context.json').then(r=>r.json()).then(ctx=>{
          // best-effort: provide context to widget
          // 1) If widget exposes a setContext API
          if(typeof el.setContext === 'function'){
            el.setContext(ctx)
          } else {
            // 2) dispatch a custom event the widget may listen to
            el.dispatchEvent(new CustomEvent('convai:context', {detail: ctx}))
            // 3) as a fallback broadcast to window. The embed may choose to listen for this.
            window.postMessage({type:'CONVAI_CONTEXT', payload: ctx}, '*')
          }
        }).catch(()=>{
          console.warn('Could not fetch assistant context')
        })

      }catch(e){
        console.warn('Failed to initialize ConvAI widget', e)
      }
    }
    document.body.appendChild(script)

    // cleanup on unmount
    return ()=>{
      // optional: remove widget and script
      const existing = document.querySelectorAll('elevenlabs-convai')
      existing.forEach(n=>n.remove())
      const scripts = Array.from(document.querySelectorAll('script')).filter(s=> s.src && s.src.includes('convai-widget-embed'))
      scripts.forEach(s=>s.remove())
      window.__convai_widget_injected = false
    }
  },[])

  return null
}
