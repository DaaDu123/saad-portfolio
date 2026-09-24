import { useEffect, useState } from 'react'
export default function Loader({ onDone }) {
  const [p, setP] = useState(0), [out, setOut] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setP(v => Math.min(100, v + Math.ceil(Math.random() * 7))), 90)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    if (p >= 100) {
      const a = setTimeout(() => setOut(true), 350), b = setTimeout(onDone, 1100)
      return () => { clearTimeout(a); clearTimeout(b) }
    }
  }, [p])
  return (
    <div className={'loader' + (out ? ' out' : '')}>
      <div className="ld-logo"><span>MS</span><i /></div>
      <h4>Muhammad Saad</h4>
      <p>Loading portfolio…</p>
      <div className="ld-bar"><b style={{ width: p + '%' }} /></div>
      <small>{p}%</small>
    </div>
  )
}
