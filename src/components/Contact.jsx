import { D } from '../data'
import { Reveal, Head } from './ui'
export default function Contact() {
  const send = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    location.href = `mailto:${D.email}?subject=${encodeURIComponent(f.get('s') || 'Portfolio inquiry')}&body=${encodeURIComponent(f.get('m') + '\n\n— ' + f.get('n') + ' (' + f.get('e') + ')')}`
  }
  const items = [['Email', D.email, 'mailto:' + D.email], ['Phone', D.phone, 'tel:' + D.phone], ['Location', D.loc, null]]
  return (
    <section id="contact"><div className="wrap">
      <Head t="Contact" h={<>Let's Work <span className="grad">Together</span></>} s="Have a project in mind? I'd love to hear from you." />
      <div className="grid g2">
        <Reveal v="l"><div className="card">{items.map(([l, v, h]) => (
          <div className="ct" key={l}><div><p className="m">{l}</p>{h ? <a href={h}><b>{v}</b></a> : <b>{v}</b>}</div></div>
        ))}</div></Reveal>
        <Reveal d={150} v="r"><form className="card" onSubmit={send}>
          <input name="n" placeholder="Name" required /><input name="e" type="email" placeholder="Email" required />
          <input name="s" placeholder="Subject" /><textarea name="m" rows="4" placeholder="Message" required />
          <button className="btn p" type="submit" style={{ justifyContent: 'center' }}>Send Message</button>
        </form></Reveal>
      </div>
    </div></section>
  )
}
