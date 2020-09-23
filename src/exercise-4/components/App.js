import React, {Component} from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
           <Route component={NotMatch} />
            <Route path='/:user(\d+)' component={User} />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
           </BrowserRouter>
      </div>
    );
  }
}

export default App;
