import { D } from '../data'
import { Head } from './ui'
export default function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <Head n="03" t="Experience" h="Where I've done the work." s="Cards stack as you scroll: newest role on top of the journey." />
      <div className="xs">{D.exp.map((e, i) => (
        <article className="xc" key={e.c} style={{ '--i': i }}>
          <div><span className="mono">{e.y}</span><h3>{e.r}</h3><p className="ac" style={{ fontWeight: 600 }}>{e.c}</p><div style={{ marginTop: 18 }}>{e.t.map(t => <span className="chip" key={t}>{t}</span>)}</div></div>
          <ul className="li">{e.b.map(b => <li key={b}>{b}</li>)}</ul>
        </article>
      ))}</div>
    </div></section>
  )
}
