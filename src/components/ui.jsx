import { useEffect, useRef, useState } from 'react'
import { D } from '../data'

export function Reveal({ children, d = 0, className = '', ...p }) {
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { r.current.classList.add('in'); o.disconnect() } }, { threshold: 0.12 })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <div ref={r} className={'rv ' + className} style={{ transitionDelay: d + 'ms' }} {...p}>{children}</div>
}

export function Head({ t, h, s }) {
  return <Reveal><span className="tag">{t}</span><h2>{h}</h2><p className="sub">{s}</p></Reveal>
}

export function Typing() {
  const [s, setS] = useState('')
  const i = useRef(0), c = useRef(0), del = useRef(false)
  useEffect(() => {
    let t
    const tick = () => {
      const w = D.roles[i.current]
      c.current += del.current ? -1 : 1
      setS(w.slice(0, c.current))
      let n = del.current ? 35 : 70
      if (!del.current && c.current === w.length) { del.current = true; n = 1600 }
      else if (del.current && c.current === 0) { del.current = false; i.current = (i.current + 1) % D.roles.length; n = 350 }
      t = setTimeout(tick, n)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return <div className="role grad">{s}<span className="cur" /></div>
}
