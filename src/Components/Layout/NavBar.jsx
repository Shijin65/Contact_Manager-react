import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark mg-auto" data-bs-theme="dark">
        <div class="container-fluid">
          <Link to="/home" class="navbar-brand">Navbar</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            
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