import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fonts/webfont.css'
import './css/fonts/helper.css'
import './css/animate.css'
import './css/hamburgers/hamburgers.css'
import './css/style.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {
  render() {
    return (
  
        <Router>
          <ScrollToTop />
          <div >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
         </div>
        </Router>

     
    
    )
  }
}

export default App