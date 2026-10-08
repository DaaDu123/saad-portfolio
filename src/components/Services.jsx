import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Services() {
  return (
    <section id="services"><div className="wrap">
      <Head n="05" t="Services" h="What I can build for you." />
      <div className="sv">{D.svc.map(([t, d], k) => (
        <Reveal key={t} d={(k % 2) * 100}><div><span className="mono">{String(k + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div></Reveal>
      ))}</div>
    </div></section>
  )
}
