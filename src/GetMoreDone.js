import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

class GetMoreDone extends Component {
  render() {
    return (

        <section className="get-access bg-orange">
        <div className="get-access-bg">
          <div className="container ">
            <div className="row  justify-content-center">
    
              <div className="col-md-8 d-flex  min-width">
                <div className="text-white flex-grow-1 align-self-center">
    
                  <div className=" text-center">
                    <h1>Get More Done</h1>
                    <h4>Learn how you can collaborate and be more efficient at work, home and on-the-go by
                      using TrakDone.</h4>
                    <br />
                    <Link to="/signup" className="btn btn-outline-primary btn-lg"> Register for Beta</Link>
        
                  </div>
                </div>
    
              </div>
            </div>
    
          </div>
        </div>
      </section>
    

    )
  }
}

export default GetMoreDone
