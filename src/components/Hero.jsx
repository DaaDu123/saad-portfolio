import { D } from '../data'
import { Typing, Counter, Particles } from './ui'

const tech = ['React', '.NET', 'C#', 'Blazor']
const Ic = ({ children }) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>

export default function Hero() {
  return (
    <section id="home">
      <div className="gridbg" /><div className="blob b1" /><div className="blob b2" /><Particles />
      <div className="wrap hero">
        <div>
          <span className="badge ent" style={{ '--i': 0 }}><i className="dot" />Available for opportunities</span>
          <p className="ent" style={{ '--i': 1, marginTop: 22, color: 'var(--muted)' }}>Hello, I'm</p>
          <h1>{D.name.split(' ').map((w, i) => <span className="wd" key={w}><span style={{ '--i': i + 2 }}><span className="shim">{w}</span></span></span>)}</h1>
          <div className="ent" style={{ '--i': 4 }}><Typing /></div>
          <p className="ent" style={{ '--i': 5, margin: '16px 0', maxWidth: 540, color: 'var(--muted)' }}>
            I build scalable, secure and beautiful web applications with C#, ASP.NET Core 10, Blazor, React.js and Node.js.
          </p>
          <div className="row ent" style={{ '--i': 6 }}>
            <a className="btn p" href="#projects">View Projects →</a>
            <a className="btn" href={'mailto:' + D.email}>Hire Me</a>
          </div>
          <div className="social ent" style={{ '--i': 7 }}>
            <a href={'mailto:' + D.email} aria-label="Email"><Ic><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Ic></a>
            <a href={'tel:' + D.phone} aria-label="Phone"><Ic><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Ic></a>
          </div>
          <div className="hero-stats ent" style={{ '--i': 8 }}>
            {D.stats.slice(0, 3).map(([a, b]) => <div key={b}><b className="grad"><Counter v={a} /></b><span>{b}</span></div>)}
          </div>
        </div>
        <div className="ph-visual">
          <div className="ph-ring" />
          <div className="ph-core"><img src="/saad.jpg" alt="Muhammad Saad" /></div>
          <div className="orb">{tech.map(t => <span className="tk" key={t}>{t}</span>)}</div>
          <div className="fc f1"><b className="grad">3+ Years</b>Full-stack experience</div>
          <div className="fc f2"><b className="grad">Secure APIs</b>JWT · OAuth · RBAC</div>
        </div>
      </div>
      <a href="#about" className="scrollcue" aria-label="Scroll down" />
    </section>
  )
}
