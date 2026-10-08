import { useState } from 'react'
import { NAV } from '../data'
const S = ({ children }) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
export default function Navbar({ sc, act, dark, setDark, hide }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={(sc ? 'sc' : '') + (hide && !open ? ' hide' : '')}>
      <div className="wrap">
        <a href="#home" className="brand"><span className="logo"><img src="/saad.jpg" alt="Muhammad Saad" /></span>Saad<span className="ac">.</span></a>
        <div className={'links' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
          {NAV.map(n => <a key={n} href={'#' + n.toLowerCase()} className={act === n ? 'on' : ''}>{n}</a>)}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="ic" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
            {dark ? <S><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></S> : <S><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></S>}
          </button>
          <button className="ic burger" aria-label="Menu" onClick={() => setOpen(!open)}><S>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}</S></button>
        </div>
      </div>
    </nav>
  )
}
