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
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const bar = useRef()

  useEffect(() => { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => { document.body.style.overflow = loading ? 'hidden' : '' }, [loading])
  useEffect(() => {
    const f = () => {
      setSc(scrollY > 20)
      const h = document.documentElement.scrollHeight - innerHeight
      if (bar.current) bar.current.style.width = (scrollY / h) * 100 + '%'
      let a = 'Home'
      NAV.forEach(n => { const e = document.getElementById(n.toLowerCase()); if (e && e.getBoundingClientRect().top < 220) a = n })
      setAct(a)
    }
    addEventListener('scroll', f, { passive: true }); f()
    return () => removeEventListener('scroll', f)
  }, [])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div id="bar" ref={bar} />
      <Navbar sc={sc} act={act} dark={dark} setDark={setDark} />
      <Hero /><About /><Skills /><Experience /><Projects /><Services /><Education /><Contact />
      <Footer />
    </>
  )
}
