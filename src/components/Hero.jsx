import { D } from '../data'
import { Typing } from './ui'
const tech = ['React', '.NET', 'C#', 'SQL Server']
export default function Hero() {
  return (
    <section id="home">
      <div className="gridbg" /><div className="blob b1" /><div className="blob b2" />
      <div className="wrap hero">
        <div>
          <span className="badge"><i className="dot" />Available for opportunities</span>
          <p style={{ marginTop: 22, color: 'var(--muted)' }}>Hello, I'm</p>
          <h1><span className="shim">{D.name}</span></h1>
          <Typing />
          <p style={{ margin: '16px 0', maxWidth: 540, color: 'var(--muted)' }}>
            I build scalable, secure and beautiful web applications with C#, ASP.NET Core, React.js and Node.js.
          </p>
          <div className="row">
            <a className="btn p" href="#projects">View Projects →</a>
            <a className="btn" href={'mailto:' + D.email}>Hire Me</a>
          </div>
          <div className="social">
            <a href={'mailto:' + D.email} aria-label="Email">✉️</a>
            <a href={'tel:' + D.phone} aria-label="Phone">📞</a>
            <a href="#contact" aria-label="Contact">💬</a>
          </div>
          <div className="hero-stats">
            {D.stats.slice(0, 3).map(([a, b]) => <div key={b}><b className="grad">{a}</b><span>{b}</span></div>)}
          </div>
        </div>
        <div className="ph-visual">
          <div className="ph-ring" />
          <div className="ph-core">MS</div>
          <div className="orb">{tech.map(t => <span className="tk" key={t}>{t}</span>)}</div>
          <div className="fc f1"><b className="grad">4+ Years</b>Full-stack experience</div>
          <div className="fc f2"><b className="grad">Secure APIs</b>JWT · OAuth · RBAC</div>
        </div>
      </div>
      <a href="#about" className="scrollcue" aria-label="Scroll down" />
    </section>
  )
}
