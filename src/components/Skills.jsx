import { D } from '../data'
import { Reveal, Head } from './ui'
const list = ['React', 'TypeScript', 'C#', '.NET', 'ASP.NET Core', 'Node.js', 'Express.js', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Redux', 'Tailwind', 'SignalR', 'JWT', 'EF Core']
export default function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <Head t="Skills" h={<>Technical <span className="grad">Expertise</span></>} s="A toolkit for building enterprise-grade full-stack applications." />
      <div className="grid g2">{Object.entries(D.skills).map(([k, v], i) => (
        <Reveal key={k} d={i * 80}><div className="card" style={{ height: '100%' }}><h3>{k}</h3>
          <div style={{ marginTop: 10 }}>{v.map(s => <span className="chip" key={s}>{s}</span>)}</div></div></Reveal>
      ))}</div>
      <div className="mq"><div className="mt">{[0, 1].flatMap(j => list.map(t => <span key={t + j}>{t}</span>))}</div></div>
    </div></section>
  )
}
