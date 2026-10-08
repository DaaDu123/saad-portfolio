import { Reveal, Head } from './ui'

export default function Education() {
  return (
    <section id="education"><div className="wrap">
      <Head t="Education" h={<>Academic <span className="grad">Background</span></>} s="Foundation in software engineering principles." />
      <Reveal v="z"><div className="card" style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        <div><span className="yr">2019 – 2023</span><h3>Bachelor's Degree in Computer Science</h3><p className="m">Gomal University, Dera Ismail Khan</p></div>
      </div></Reveal>
    </div></section>
  )
}
