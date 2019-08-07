import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import About from './components/About'
import seasonOne from './components/seasonOne'
import Episode1 from './components/Episode1'
import Episode2 from './components/Episode2'
import Episode3 from './components/Episode3'
import Episode4 from './components/Episode4'
import Episode5 from './components/Episode5'
import Episode6 from './components/Episode6'
import Episode7 from './components/Episode7'
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
          <Route exact path="/Episodes/2" component={Episode1}/>
          <Route exact path="/Episodes/3" component={Episode1}/>
          <Route exact path="/Episodes/4" component={Episode1}/>
          <Route exact path="/Episodes/5" component={Episode1}/>
          <Route exact path="/Episodes/6" component={Episode1}/>
          <Route exact path="/Episodes/7" component={Episode1}/>
          <Route exact path="/Contact" component={Contact}/>
          </Switch>
          </div>
          </Router>
          )
  }

export default App;
