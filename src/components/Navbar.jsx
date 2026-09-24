import { useState } from 'react'
import { NAV } from '../data'
export default function Navbar({ sc, act, dark, setDark }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={sc ? 'sc' : ''}>
      <div className="wrap">
        <a href="#home" className="logo">MS</a>
        <div className={'links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
          {NAV.map(n => <a key={n} href={'#' + n.toLowerCase()} className={act === n ? 'on' : ''}>{n}</a>)}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="ic" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? '☀️' : '🌙'}</button>
          <button className="ic burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
    </nav>
  )
}
