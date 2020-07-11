import React, {useEffect} from 'react';
import { 
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';
import {Home, About, Contact} from '../views';
import '../App.css';


//component Navbar
function Navbar () {
  //component lifecyle
  useEffect(() => {
    console.log('component didmount')
  })
     return(
            <Router>
      <nav>
          <div className="logo">Chan Chan Bayu Bahari</div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </Router>
        )
    }
    

export default Navbar; 