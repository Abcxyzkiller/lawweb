import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Component/Header/header';
import Menu from './Component/Menu/menu'
import Body from './Component/Body/body'
import iconsOfHeader from './Component/Header/iconsOfHeader'
import HomePage from './page/homePage';
import Aboutus from './Component/Menu/aboutUs';
import AboutPage from './page/aboutPage';
import SearchPage from './page/searchPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        

       

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/more" component={SearchPage} />
      </div>
    </Router>
 
    );
  }
}

export default App;