import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="hero" >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Ooops...</h1>
          <p className="py-6">404 - Page not found!</p>
          <Link to='/' className="btn btn-info ">
            <FaHome className="mr-2"/>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
