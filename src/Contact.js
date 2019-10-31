import React, { Component } from 'react'
import Header from './HeadTD'
import Footer from './FooterTD'

class Contact extends Component {

        constructor(props){
          super(props) 

            this.state = { 
               FirstName: '', 
               LastName: '',  
               Email: '', 
               Phone: '',
               Subject: '',
               Message:'',
            
          }
        }


    render() {
      return (
        <div>
          <Header />
  
          <section className="jumbotron space-top">
        <div className="container">

            <div className="row  d-flex justify-content-center">
                <div className="col-md-12 col-sm-12 align-self-center text-center">
                    <div className="">
                        <h1 className="jumbotron-heading font-weight-bold">Contact Us</h1>

                        <p>
                            Tell us about your issue so we can help you more quickly.
                        </p>
                    </div>

                </div>

                <div className="col-md-6 col-sm-12">


                    <div className="form-group">
                        <div className="input-wrap position-relative">
                            <label for="exampleInputEmail1">First Name</label>
                            <input type="text" className="form-control" id="exampleInputFirstName"
                                aria-describedby="exampleInputFirstName" placeholder="Enter First Name"  value={this.state.FirstName}/>
                            <span className="input-icon"><i className="icon dripicons-user pe-sm pe-va"></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-wrap position-relative">
                            <label for="exampleInputEmail1">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputLastName"
                                aria-describedby="exampleInputLastName" placeholder="Enter Last Name"  value={this.state.LastName}/>
                            <span className="input-icon"><i className="icon dripicons-user pe-sm pe-va"></i></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrap position-relative">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail"
                                aria-describedby="exampleInputEmail" placeholder="Enter Email Address" value={this.state.Email}/>
                            <span className="input-icon"><i className="icon dripicons-mail pe-sm pe-va"></i></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-wrap position-relative">
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="number" className="form-control" id="exampleInputNumber"
                                aria-describedby="exampleInputNumber" placeholder="Enter Phone Number" value={this.state.Phone}/>
                            <span className="input-icon"><i className="icon dripicons-phone pe-sm pe-va"></i></span>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="input-wrap position-relative">
                            <label for="exampleInputSubject">Subject</label>
                            <input type="text" className="form-control" id="exampleInputSubject"
                                aria-describedby="exampleInputSubject" placeholder="Enter Subject" value={this.state.Subject}/>
                            <span className="input-icon"><i className="icon dripicons-pencil pe-sm pe-va"></i></span>
                        </div>
                    </div>


                    <div className="form-group">

                        <div className="input-wrap position-relative">
                            <label for="FormControlTextarea1">Messages</label>
                            <textarea className="form-control" id="FormControlTextarea1" rows="3"
                                placeholder="Write a message">{this.state.Message}</textarea>
                            <span className="input-icon"><i className="icon dripicons-message pe-sm pe-va"></i></span>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Contact Us</button>



                </div>



            </div>

        </div>
    </section>



          <Footer />
        </div>
      )
      }
  }

  
export default Contact