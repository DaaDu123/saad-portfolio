import { D } from '../data'
import { Reveal, Head, Marquee } from './ui'
const A = ['ASP.NET Core 10', 'Blazor', 'React.js', 'Clean Architecture', 'SQL Server', 'Node.js', 'TypeScript', 'CQRS']
const B = ['Entity Framework Core', 'JWT & OAuth', 'SignalR', 'PostgreSQL', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'MediatR']
export default function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <Head n="02" t="Skills" h="The toolkit behind the work." s="Frontend, backend, data and the practices that keep large codebases healthy." />
      <div className="sk">{Object.entries(D.skills).map(([k, v], i) => (
        <Reveal key={k} d={i * 90}><div><h3>{k}<small>{String(v.length).padStart(2, '0')}</small></h3><ul>{v.map(s => <li key={s}>{s}</li>)}</ul></div></Reveal>
      ))}</div>
      <Marquee items={A} /><Marquee items={B} rev />
    </div></section>
  )
}
