import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./Home";
import MyProfile from "./MyProfile";
import AboutUs from "./AboutUs";
import Header from './Header';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header /> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/products/:id' component={Product} />
            <Route exact path='/products' component={Products} />
            <Route exact path="/my-profile" component={MyProfile} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
