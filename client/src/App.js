import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import About from './components/About'
import seasonOne from './components/seasonOne'
import Episode1 from './components/Episode1'
import Contact from './components/Contact'
import "./style.css"



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/About" component={About}/>
          <Route exact path="/Episodes" component={seasonOne}/>
          <Route exact path="/Episodes/1" component={Episode1}/>
          <Route exact path="/Contact" component={Contact}/>
          </Switch>
          </div>
          </Router>
          )
  }

export default App;
