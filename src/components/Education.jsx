import { Reveal, Head } from './ui'
export default function Education() {
  return (
    <section id="education"><div className="wrap">
      <Head t="Education" h={<>Academic <span className="grad">Background</span></>} s="Foundation in software engineering principles." />
      <Reveal><div className="card" style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="sv" style={{ margin: 0 }}>🎓</div>
        <div><h3>Bachelor's Degree in Software Engineering</h3><p className="m">Gomal University, Dera Ismail Khan · 2018 – 2022</p></div>
      </div></Reveal>
    </div></section>
  )
}
