import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <Head t="Experience" h={<>Professional <span className="grad">Journey</span></>} s="Building solutions across e-commerce, public service, legal, healthcare and event platforms." />
      <div className="tl">{D.exp.map((e, i) => (
        <Reveal key={e.c} d={i * 120} v="l" className="it"><div className="card">
          <span className="yr">{e.y}</span><h3>{e.r}</h3><p className="m" style={{ marginBottom: 10 }}>{e.c}</p>
          <ul className="ul">{e.b.map(b => <li key={b}>{b}</li>)}</ul>
          <div style={{ marginTop: 10 }}>{e.t.map(t => <span className="chip" key={t}>{t}</span>)}</div>
        </div></Reveal>
      ))}</div>
    </div></section>
  )
}
