import { D } from '../data'
export default function Footer() {
  return <footer><div className="wrap">© {new Date().getFullYear()} {D.name}. All rights reserved. · Built with React</div></footer>
}
