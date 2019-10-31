import React, { Component } from 'react'
import LogoFooter from './images/TrakDone_O.png'
import {
  Link
} from "react-router-dom";


class Footer extends Component {
  render() {
    return (

     
 <footer>
  <div className="container ">

    <div className="row  ">

      <div className="col-md-12">

        <div className="footer-links">

          <div className='row min-width  d-flex'>
            <div className="col-md-8 col-sm-12 align-self-center">
            <Link to="/about"> About Us </Link>
            <Link to="/contact">Contact</Link>
            </div>
            <div className="col-md-4 col-sm-12 copyright text-center align-self-center">
              <Link to="/"><img src={LogoFooter} className="logo-footer" alt="TrakDone Logo"/></Link><br />
              © 2019 TrakDone. <br /> All Rights Reserved
            </div>


          </div>


        </div>

      </div>


    </div>

  </div>
</footer>


    )
  }
}

export default Footer