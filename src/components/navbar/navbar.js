import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-12'>
            <nav className="navbar navbar-expand-lg navbar-black bg-black">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-lg justify-content-between" id="navbarSupportedContent">

                  <div className='logo'>
                    <h1>Zayka</h1>
                  </div>

                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/about">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/menu">MENU</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/events">PRIVATE EVENTS</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-light" aria-current="page" to="/contact">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar