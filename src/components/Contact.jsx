import { D } from '../data'
import { Reveal } from './ui'
export default function Contact() {
  const send = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    location.href = `mailto:${D.email}?subject=${encodeURIComponent(f.get('s') || 'Portfolio inquiry')}&body=${encodeURIComponent(f.get('m') + '\n\n— ' + f.get('n') + ' (' + f.get('e') + ')')}`
  }
  const items = [['Email', D.email, 'mailto:' + D.email], ['Phone', D.phone, 'tel:' + D.phone], ['Location', D.loc, null]]
  return (
    <section id="contact"><div className="wrap">
      <Reveal><span className="mono">06 · Contact</span><h2 className="big" style={{ marginTop: 20 }}>Let's build<br />something <span className="ac">good.</span></h2></Reveal>
      <Reveal d={150}><a className="em" href={'mailto:' + D.email} data-cur="Write">{D.email}</a></Reveal>
      <div className="cg">
        <Reveal v="l"><div>{items.map(([l, v, h]) => <div className="ct" key={l}><span className="mono">{l}</span>{h ? <a href={h}><b>{v}</b></a> : <b>{v}</b>}</div>)}</div></Reveal>
        <Reveal v="r"><form onSubmit={send}>
          <input name="n" placeholder="Your name" required /><input name="e" type="email" placeholder="Your email" required />
          <input name="s" placeholder="Subject" /><textarea name="m" rows="3" placeholder="Tell me about your project" required />
          <div><button className="btn p" type="submit">Send message</button></div>
        </form></Reveal>
      </div>
    </div></section>
  )
}
