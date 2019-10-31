import React, { Component } from 'react'
import Header from './HeadTD'
import Footer from './FooterTD'
import GetMoreDone from './GetMoreDone'
import HeroImage from './images/about.png'
import {
    Link
  } from "react-router-dom";
  

const AboutHero = () => {
  return (
    <section className="jumbotron space-top">
    <div className="container">

      <div className="row  d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 align-self-center text-center">
          <div>
            <h1 className="jumbotron-heading font-weight-bold">About</h1>
            <p>
                            We are a team of talented engineers currently working in stealth mode trying to bring some
                            order to our lives in the connected world of today. If you would like to work with us or
                            know more about us, then click <u><Link to="/contact" class="text-orange">Here</Link></u>.

             </p>

          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <img src={HeroImage} alt="About Us" />
        </div>
      </div>
    </div>
  </section>

  )
}



class About extends Component {
    render() {
      return (
        <div>
          <Header />
          <AboutHero />
          <GetMoreDone />
          <Footer />
        </div>
      )
      }
  }

  
export default About