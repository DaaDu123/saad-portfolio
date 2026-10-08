import { useEffect, useState } from 'react'
export default function Loader({ onDone }) {
  const [p, setP] = useState(0), [out, setOut] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setP(v => Math.min(100, v + Math.ceil(Math.random() * 6))), 80)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    if (p >= 100) {
      const a = setTimeout(() => setOut(true), 400), b = setTimeout(onDone, 1600)
      return () => { clearTimeout(a); clearTimeout(b) }
    }
  }, [p])
  return (
    <div className={'loader' + (out ? ' out' : '')}>
      <div className="ld-c">
        <div className="ld-p"><img src="/saad.jpg" alt="" /></div>
        <h4>{'Muhammad Saad'.split('').map((c, i) => <span key={i} style={{ '--i': i }}>{c === ' ' ? '\u00a0' : c}</span>)}</h4>
        <p className="mono" style={{ marginTop: 8 }}>Portfolio · {new Date().getFullYear()}</p>
      </div>
      <div className="ld-n">{p}<sup>%</sup></div>
      <div className="ld-l" style={{ width: p + '%' }} />
    </div>
  )
}
