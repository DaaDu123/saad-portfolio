import { useEffect, useRef, useState } from 'react'
import { D } from '../data'

export function Reveal({ children, d = 0, v = '', className = '', ...p }) {
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { r.current.classList.add('in'); o.disconnect() } }, { threshold: 0.12 })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <div ref={r} className={'rv ' + (v ? 'v-' + v + ' ' : '') + className} style={{ transitionDelay: d + 'ms' }} {...p}>{children}</div>
}

export function Head({ n, t, h, s }) {
  return <Reveal className="hd"><div className="mono"><span>{n}</span><span>{t}</span></div><h2><span className="ln"><span>{h}</span></span></h2>{s && <p className="sub">{s}</p>}</Reveal>
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
      let n = del.current ? 30 : 65
      if (!del.current && c.current === w.length) { del.current = true; n = 1700 }
      else if (del.current && c.current === 0) { del.current = false; i.current = (i.current + 1) % D.roles.length; n = 350 }
      t = setTimeout(tick, n)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return <div className="role">{s}<span className="cur" /></div>
}

export function Counter({ v }) {
  const r = useRef(), n = parseInt(v), s = String(v).replace(/^\d+/, '')
  const [x, setX] = useState(0)
  useEffect(() => {
    const go = () => {
      const t0 = performance.now()
      const f = t => { const p = Math.min(1, (t - t0) / 1800); setX(p < 1 ? Math.round(n * (1 - Math.pow(2, -10 * p))) : n); if (p < 1) requestAnimationFrame(f) }
      requestAnimationFrame(f)
    }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { o.disconnect(); window.__ready ? go() : addEventListener('ready', go, { once: true }) } })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <span ref={r}>{x}{s}</span>
}

/* marquee whose speed reacts to scroll velocity */
export function Marquee({ items, rev }) {
  const r = useRef()
  useEffect(() => {
    let v = 0, p = scrollY, raf
    const a = r.current.getAnimations?.()[0]
    const f = () => { const d = Math.abs(scrollY - p); p = scrollY; v += (Math.min(d, 70) - v) * .08; if (a) a.playbackRate = 1 + v * .4; raf = requestAnimationFrame(f) }
    f()
    return () => cancelAnimationFrame(raf)
  }, [])
  return <div className="mq"><div ref={r} className={'mt' + (rev ? ' rev' : '')}>{[0, 1].flatMap(j => items.map(t => <span key={t + j}>{t}</span>))}</div></div>
}

/* words light up as you scroll past */
export function ScrollText({ t }) {
  const r = useRef()
  useEffect(() => {
    const w = [...r.current.children]
    const f = () => {
      const k = r.current.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (innerHeight * .85 - k.top) / (k.height + innerHeight * .3)))
      w.forEach((s, i) => { s.style.opacity = (.16 + .84 * Math.min(1, Math.max(0, p * w.length * 1.15 - i))).toFixed(2) })
    }
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return <p ref={r} className="st">{t.split(' ').map((x, i) => <span key={i}>{x} </span>)}</p>
}

export function Clock() {
  const f = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit' })
  const [t, setT] = useState(f)
  useEffect(() => { const i = setInterval(() => setT(f()), 20000); return () => clearInterval(i) }, [])
  return <>{t} PKT</>
}
