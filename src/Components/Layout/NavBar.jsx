import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark mg-auto" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">Navbar</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar