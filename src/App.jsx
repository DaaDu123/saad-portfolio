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
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const bar = useRef()

  useEffect(() => { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { document.body.style.overflow = loading ? 'hidden' : '' }, [loading])
  useEffect(() => {
    const f = () => {
      setSc(scrollY > 20)
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
    let lc, lb
    const clr = (el, ps) => el && ps.forEach(p => el.style.removeProperty(p))
    const m = e => {
      if (e.pointerType !== 'mouse') return
      r.style.setProperty('--cx', e.clientX + 'px'); r.style.setProperty('--cy', e.clientY + 'px')
      r.style.setProperty('--px', (e.clientX / innerWidth - .5).toFixed(3)); r.style.setProperty('--py', (e.clientY / innerHeight - .5).toFixed(3))
      const c = e.target.closest?.('.card'), b = e.target.closest?.('.btn')
      if (c) {
        const k = c.getBoundingClientRect(), x = (e.clientX - k.left) / k.width, y = (e.clientY - k.top) / k.height
        c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%')
        if (c.tagName !== 'FORM') { c.style.setProperty('--rx', ((.5 - y) * 6).toFixed(2) + 'deg'); c.style.setProperty('--ry', ((x - .5) * 8).toFixed(2) + 'deg') }
      }
      if (b) { const k = b.getBoundingClientRect(); b.style.setProperty('--tx', (e.clientX - k.left - k.width / 2) * .22 + 'px'); b.style.setProperty('--ty', (e.clientY - k.top - k.height / 2) * .3 + 'px') }
      if (lc !== c) clr(lc, ['--rx', '--ry']); if (lb !== b) clr(lb, ['--tx', '--ty'])
      lc = c; lb = b
    }
    addEventListener('pointermove', m)
    return () => removeEventListener('pointermove', m)
  }, [])

  return (
    <>
      <div id="glow" />
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div id="bar" ref={bar} />
      <Navbar sc={sc} act={act} dark={dark} setDark={setDark} hide={hide} />
      <Hero /><About /><Skills /><Experience /><Projects /><Services /><Education /><Contact />
      <Footer />
    </>
  )
}
