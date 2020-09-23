import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Link, Route,Switch } from "react-router-dom";
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div style= {{background: 'grey',height:'50px'}}>
        <ul className="nav justify-content-end" >
            <li >
              <Link  to="/" style= {{color:'black',fontSize:'30px'}}>Home</Link>
            </li>
            <li >
              <Link  to="/my-profile" style= {{color:'black',fontSize:'30px'}}>My Profile</Link>
            </li>
            <li >
              <Link to="/about-us" style= {{color:'black',fontSize:'30px'}}>About Us</Link>
            </li>
          </ul>
         </div>  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-profile" component={MyProfile} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
