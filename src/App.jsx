import { useEffect, useRef, useState } from 'react'
import { NAV } from './data'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [sc, setSc] = useState(false)
  const [act, setAct] = useState('Home')
  const [hide, setHide] = useState(false)
  const last = useRef(0)
  const [dark, setDark] = useState(true)
  const bar = useRef()

  useEffect(() => { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { document.body.style.overflow = loading ? 'hidden' : '' }, [loading])
  useEffect(() => {
    const f = () => {
      setSc(scrollY > 20); document.documentElement.style.setProperty('--sy', scrollY)
      setHide(scrollY > 240 && scrollY > last.current); last.current = scrollY
      const h = document.documentElement.scrollHeight - innerHeight
      if (bar.current) bar.current.style.width = (scrollY / h) * 100 + '%'
      let a = 'Home'
      NAV.forEach(n => { const e = document.getElementById(n.toLowerCase()); if (e && e.getBoundingClientRect().top < 220) a = n })
      setAct(a)
    }
    addEventListener('scroll', f, { passive: true }); f()
    return () => removeEventListener('scroll', f)
  }, [])

  useEffect(() => { if (!loading) { document.body.classList.add('ready'); window.__ready = 1; dispatchEvent(new Event('ready')) } }, [loading])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.15 })
    document.querySelectorAll('.tl').forEach(t => io.observe(t))
    document.querySelectorAll('.chip').forEach(c => c.style.setProperty('--c', [...c.parentNode.children].indexOf(c)))
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    const r = document.documentElement
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches
    const d = document.querySelector('.cd'), rg = document.querySelector('.cr'), lab = rg.firstChild
    let x = 0, y = 0, rx = 0, ry = 0, raf, lb
    if (fine) r.classList.add('hc')
    const m = e => {
      if (e.pointerType !== 'mouse') return
      x = e.clientX; y = e.clientY; d.style.transform = `translate(${x}px,${y}px)`
      r.style.setProperty('--px', (x / innerWidth - .5).toFixed(3)); r.style.setProperty('--py', (y / innerHeight - .5).toFixed(3))
      const t = e.target.closest?.('a,button,input,textarea'), c = e.target.closest?.('[data-cur]'), b = e.target.closest?.('.btn')
      rg.classList.toggle('big', !!t); rg.classList.toggle('lb', !!c); lab.textContent = c ? c.dataset.cur : ''
      if (b) { const k = b.getBoundingClientRect(); b.style.setProperty('--tx', (x - k.left - k.width / 2) * .22 + 'px'); b.style.setProperty('--ty', (y - k.top - k.height / 2) * .3 + 'px') }
      if (lb && lb !== b) { lb.style.removeProperty('--tx'); lb.style.removeProperty('--ty') }
      lb = b
    }
    const f = () => { rx += (x - rx) * .16; ry += (y - ry) * .16; rg.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(f) }
    addEventListener('pointermove', m); if (fine) f()
    return () => { removeEventListener('pointermove', m); cancelAnimationFrame(raf); r.classList.remove('hc') }
  }, [])

  return (
    <>
      <div className="cd" /><div className="cr"><span /></div>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div id="bar" ref={bar} />
      <Navbar sc={sc} act={act} dark={dark} setDark={setDark} hide={hide} />
      <Hero /><About /><Skills /><Experience /><Projects /><Services /><Education /><Contact />
      <Footer />
    </>
  )
}
