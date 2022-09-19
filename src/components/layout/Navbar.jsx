import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral">
      <div className="container mx-auto">
        <div className="flex-1 px-2 mx-2">
            <FaGithub className='inline pr-3 text-5xl'/>
            <Link to='/' className="text-lg font-bold align-middle">  GitHub Finder</Link>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>    
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
      </div>
      
    </nav>
  )
}
