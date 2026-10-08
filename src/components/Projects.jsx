import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Projects() {
  return (
    <section id="projects"><div className="wrap">
      <Head n="04" t="Projects" h="Selected work." s="Hover a row to read more. The LTS project is live, click it to open the site." />
      <div>{D.proj.map((p, i) => {
        const W = p.url ? 'a' : 'div'
        const L = p.url ? { href: p.url, target: '_blank', rel: 'noopener noreferrer', 'data-cur': 'Visit' } : {}
        return (
          <Reveal key={p.n} d={60}>
            <W className="pr" {...L}>
              <span className="no">{String(i + 1).padStart(2, '0')}</span>
              <div><span className="mono">{p.k}</span><h3>{p.n}</h3>{p.url && <span className="live">Live ↗ nisaadtech.com</span>}</div>
              <div>
                <p>{p.d}</p>
                <div className="ex"><div><ul style={{ marginTop: 10 }}>{p.h && p.h.map(x => <li key={x}>{x}</li>)}</ul></div></div>
                <div style={{ marginTop: 14 }}>{p.t.map(t => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
              <span className="ar">→</span>
            </W>
          </Reveal>
        )
      })}</div>
    </div></section>
  )
}
