import { D } from '../data'
export default function Footer() {
  return <footer><div className="wrap"><span>© {new Date().getFullYear()} {D.name}</span><span>Designed and built by hand with React</span></div></footer>
}
