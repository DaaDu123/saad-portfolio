import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Services() {
  return (
    <section id="services"><div className="wrap">
      <Head t="Services" h={<>What I <span className="grad">Offer</span></>} s="End-to-end development services for modern web applications." />
      <div className="grid g4">{D.svc.map(([i, t, d], k) => (
        <Reveal key={t} d={(k % 4) * 90}><div className="card" style={{ height: '100%' }}><div className="sv">{i}</div><h3>{t}</h3><p className="m">{d}</p></div></Reveal>
      ))}</div>
    </div></section>
  )
}
