import { D } from '../data'
import { Reveal, Head, Counter, ScrollText } from './ui'
export default function About() {
  return (
    <section id="about"><div className="wrap">
      <Head n="01" t="About" h="Engineer first, always shipping." />
      <ScrollText t={D.sum} />
      <div className="ab">
        <Reveal v="l"><div className="stats">{D.stats.map(([a, b]) => <div key={b}><b><Counter v={a} /></b><span>{b}</span></div>)}</div></Reveal>
        <Reveal v="r"><ul className="li">{D.high.map((h, i) => <li key={h} data-n={String(i + 1).padStart(2, '0')}>{h}</li>)}</ul></Reveal>
      </div>
    </div></section>
  )
}
