import { D } from '../data'
import { Typing, Counter, Clock } from './ui'
export default function Hero() {
  const words = D.name.split(' ')
  let k = 0
  return (
    <section id="home">
      <div className="aur" />
      <div className="wrap hg">
        <div>
          <div className="meta mono ent" style={{ '--i': 0 }}>
            <span><i className="dot" />Available for work</span><span>{D.loc}</span><span><Clock /></span>
          </div>
          <h1>{words.map((w, wi) => <span className="wd" key={w}>{[...w].map(c => <span className="ch" key={k} style={{ '--i': k++ }}>{c}</span>)}{wi === words.length - 1 && <span className="ch ac" style={{ '--i': k }}>.</span>}</span>)}</h1>
          <div className="ent" style={{ '--i': 6 }}><Typing /></div>
          <p className="lead ent" style={{ '--i': 7 }}>I design and build secure, scalable web applications with C#, ASP.NET Core 10, Blazor and React.js, from the database to the last pixel.</p>
          <div className="row ent" style={{ '--i': 8 }}>
            <a className="btn p" href="#projects" data-cur="View">See my work</a>
            <a className="btn" href={'mailto:' + D.email}>Let's talk</a>
          </div>
          <div className="hs ent" style={{ '--i': 9 }}>
            {D.stats.slice(0, 3).map(([a, b]) => <div key={b}><b><Counter v={a} /></b><span className="mono">{b}</span></div>)}
          </div>
        </div>
        <div className="ph">
          <div className="pi"><img src="/saad.jpg" alt="Muhammad Saad" /></div>
          <div className="bd" data-cur="Hi">
            <svg viewBox="0 0 120 120"><defs><path id="cp" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs><text><textPath href="#cp" textLength="286" lengthAdjust="spacing">FULL STACK · .NET · REACT · BLAZOR · </textPath></text></svg>
            <b>↗</b>
          </div>
        </div>
      </div>
    </section>
  )
}
