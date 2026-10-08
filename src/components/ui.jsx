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

export function Head({ t, h, s }) {
  return <Reveal v="b"><span className="tag">{t}</span><h2>{h}</h2><i className="hl" /><p className="sub">{s}</p></Reveal>
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

export function Particles() {
  const r = useRef()
  useEffect(() => {
    const cv = r.current, x = cv.getContext('2d')
    let w, h, P = [], raf, m = { x: -999, y: -999 }
    const size = () => {
      w = cv.width = cv.offsetWidth; h = cv.height = cv.offsetHeight
      P = Array.from({ length: Math.min(70, (w * h / 14000) | 0) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 }))
    }
    const mv = e => { const k = cv.getBoundingClientRect(); m = { x: e.clientX - k.left, y: e.clientY - k.top } }
    const line = (a, b, c, al) => { x.strokeStyle = `rgba(${c},${al})`; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke() }
    const draw = () => {
      x.clearRect(0, 0, w, h)
      P.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        x.fillStyle = 'rgba(129,140,248,.8)'; x.beginPath(); x.arc(p.x, p.y, 1.6, 0, 7); x.fill()
        for (let j = i + 1; j < P.length; j++) { const d = Math.hypot(p.x - P[j].x, p.y - P[j].y); if (d < 120) line(p, P[j], '129,140,248', .28 * (1 - d / 120)) }
        const d = Math.hypot(p.x - m.x, p.y - m.y); if (d < 170) line(p, m, '34,211,238', .55 * (1 - d / 170))
      })
      raf = requestAnimationFrame(draw)
    }
    size(); draw()
    addEventListener('resize', size); addEventListener('pointermove', mv)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('pointermove', mv) }
  }, [])
  return <canvas ref={r} className="pcv" />
}
