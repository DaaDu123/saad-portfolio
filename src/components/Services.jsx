import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Services() {
  return (
    <section id="services"><div className="wrap">
      <Head t="Services" h={<>What I <span className="grad">Offer</span></>} s="End-to-end development services for modern web applications." />
      <div className="grid g4">{D.svc.map(([t, d], k) => (
        <Reveal key={t} d={(k % 4) * 90} v="z"><div className="card" style={{ height: '100%' }}><div className="sv">{String(k + 1).padStart(2, '0')}</div><h3>{t}</h3><p className="m">{d}</p></div></Reveal>
      ))}</div>
    </div></section>
  )
}
