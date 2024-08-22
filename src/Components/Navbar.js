import React from 'react'



export default function Navbar() {

 

  return (
    <>
      <nav className="bg-dark bg-gradient navbar navbar-expand-lg ">
        <div className="container-fluid ">
          
        <a class="navbar-brand text-warning" href="/main">CONVERTER</a>
        {/* <img src="https://play-lh.googleusercontent.com/eeqT5oAqwlaAmrELF5SSc6ol6scd4GxOgK7Hhfc6zgywGpZkhWkf2ddM8XFkOERto_ZK" class="rounded mx-auto w-2" alt="logo"></img> */}
          <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/contact">Contact</a>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}
