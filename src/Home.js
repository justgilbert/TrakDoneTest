import React, { Component } from 'react'
import Header from './HeadTD'
import Footer from './FooterTD'
import GetMoreDone from './GetMoreDone'
import HeroImage from './images/hero.png'


const Hero = () => {
  return (
    <section className="jumbotron space-top  border-bottom">
    <div className="container">

      <div className="row  d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 align-self-center text-center">
          <div className="">
            <h2 className="jumbotron-heading">Collaborate. Manage. Organize.</h2>
            <h1 className="text-orange font-weight-bold">Get More Done</h1>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <img src={HeroImage} alt="Get More Done" />
        </div>
      </div>
    </div>
  </section>

  )
}


const Features = () => {
  return (
    <section className="features min-width">
        <div className="container" >
        <div className="at-work get-more-done">
 

            <h2 className="text-center font-weight-bold ">At Work</h2>


              <div className="row  align-self-center min-width">


                      <div className="col-md-4 col-sm-12 align-self-center text-center">


                        <div className="img-container"><img src={require('./images/Work-meeting.png')} alt="At Meeting"/></div>

                      </div>
                      <div className="col-md-4 col-sm-4 align-self-center text-center">



                        <div className="img-container"><img src={require('./images/Work-working.png')} alt="At Office"/></div>


                      </div>
                      <div className="col-md-4 col-sm-4 align-self-center text-center">

                        <div className="img-container"><img src={require('./images/Work-discussion.png')} alt="At Discussion"/></div>


                      </div>

                    </div>

              </div>


                    <div className="on-the-go get-more-done">
                    <h2 className="text-center font-weight-bold">On-The-Go</h2>


                    <div className="row  justify-content-center min-width">



                      <div className="col-md-4 col-sm-12 align-self-center text-center">


                        <div className="img-container"><img src={require('./images/On-the-go-plane.png')} alt="On-the-go Plane" /></div>

                      </div>
                      <div className="col-md-4 col-sm-4 align-self-center text-center">



                        <div className="img-container"><img src={require('./images/On-the-go-road.png')}  alt="On-the-go Road" /></div>


                      </div>


                    </div>
                    </div>


                    <div className="at-home get-more-done">
                    <h2 className="text-center font-weight-bold ">At Home</h2>

                    <div className="row  align-self-center min-width">


                      <div className="col-md-4 col-sm-12 align-self-center text-center">


                        <div className="img-container"><img src={require('./images/at-home.png')}  alt="At Home"/></div>

                      </div>

                      <div className="col-md-4 col-sm-4 align-self-center text-center">



                        <div className="img-container"><img src={require('./images/at-home-on-call.png')}  alt="On Call"/></div>


                      </div>
                      <div className="col-md-4 col-sm-4 align-self-center text-center">

                        <div className="img-container"><img src={require('./images/at-home-helping.png')}  alt="Helping"/></div>


                      </div>

                    </div>
                    </div>


        </div>
    </section>
  )
}



class Home extends Component {
    render() {
      return (
        <div>
          <Header />
          <Hero />
          <Features />
          <GetMoreDone />
          <Footer />
        </div>
      )
      }
  }

  
export default Home