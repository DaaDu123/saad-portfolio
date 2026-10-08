import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Projects() {
  return (
    <section id="projects"><div className="wrap">
      <Head t="Projects" h={<>Featured <span className="grad">Work</span></>} s="Enterprise applications built with ASP.NET Core 10, Blazor, React.js and Clean Architecture." />
      <div className="grid g2">{D.proj.map((p, i) => (
        <Reveal key={p.n} d={(i % 2) * 120}><div className="card" style={{ height: '100%' }}>
          <div className="cover" style={{ background: `linear-gradient(135deg,${p.g})` }}>{p.i}</div>
          <span className="tag" style={{ marginBottom: 2 }}>{p.k}</span><h3>{p.n}</h3><p className="m">{p.d}</p>
          {p.h && <ul className="ul" style={{ marginTop: 10 }}>{p.h.map(x => <li key={x}>{x}</li>)}</ul>}
          <div style={{ marginTop: 12 }}>{p.t.map(t => <span className="chip" key={t}>{t}</span>)}</div>
        </div></Reveal>
      ))}</div>
    </div></section>
  )
}
