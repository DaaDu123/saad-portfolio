import { D } from '../data'
import { Reveal, Head } from './ui'
export default function About() {
  return (
    <section id="about"><div className="wrap">
      <Head t="About Me" h={<>Crafting <span className="grad">Digital Excellence</span></>} s="Full-stack developer focused on reliable, secure and scalable enterprise solutions." />
      <div className="grid g2">
        <Reveal><div className="card">
          <h3>{D.name}</h3><p className="m" style={{ marginBottom: 12 }}>📍 {D.loc}</p>
          <p className="m">{D.sum} I work across C#, ASP.NET Core, React.js, Node.js, TypeScript, Redux Toolkit, MongoDB and PostgreSQL, with strong focus on clean architecture, database optimization and application security.</p>
          <div className="stats">{D.stats.map(([a, b]) => <div className="card stat" key={b}><b className="grad">{a}</b><span>{b}</span></div>)}</div>
        </div></Reveal>
        <Reveal d={150}><div className="card" style={{ height: '100%' }}>
          <h3>Career Highlights</h3>
          <ul className="ul" style={{ marginBottom: 20 }}>{D.high.map(h => <li key={h}>{h}</li>)}</ul>
          <h3>Career Journey</h3>
          <div className="tl" style={{ marginTop: 14 }}>{D.exp.map(e => <div className="it" key={e.c}><span className="yr">{e.y}</span><h3 style={{ fontSize: '1rem' }}>{e.r}</h3><p className="m">{e.c}</p></div>)}</div>
        </div></Reveal>
      </div>
    </div></section>
  )
}
