import React, { Component } from 'react'
import Logo from './images/TrakDone_Logo.png'
import {
  Link
} from "react-router-dom";


const openNav =  event => { 

  document.getElementById("myNav").style.height = "100%";

  event.preventDefault();

} 

const closeNav = event => { 

  document.getElementById("myNav").style.height = "0";
  event.preventDefault();

} 

class Header extends Component {
  render() {
    return (

      <header className="navbar fixed-top"> 
          <div className="container screen-sm">
              <div id="myNav" className="overlay">
               
                <button className="closebtn btn text-white" onClick={closeNav}  type="button" aria-label="Menu" aria-controls="navigation">&times;</button>
             
                <div className="overlay-content">
                  <Link to="/about">About </Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/signin">Sign in</Link>
                  <br />
                  <Link to="/signup" className="btn btn-primary ">Register for Beta</Link>
            
                </div>
              </div>
              <Link to="/"  className="td-nav-item"> <img src={Logo} alt="TrakDone Logo"/></Link>
              <button className="hamburger hamburger--elastic" type="button" aria-label="Menu" aria-controls="navigation"
                onClick={openNav}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
           </div>

           <div className="container screen-lg d-flex justify-content-between">

              <div className="d-flex align-items-center  td-nav-wrap">
              <Link to="/"  className="td-nav-item"><img src={Logo} alt="TrakDone Logo" /></Link>
               
              </div>

              <div className="d-flex align-items-center td-nav-wrap">
              
              <Link to="/signin" className="td-nav-item white-space">Sign in </Link>
              <Link to="/signup" className="nav-item btn btn-primary btn-sm text-white">Register for Beta </Link>
              </div>
            </div>

       </header>

    )
  }
}

export default Header