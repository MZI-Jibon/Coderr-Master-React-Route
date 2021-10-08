import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Enroll from './Components/Enroll/Enroll';
import Courses from './Components/Courses/Courses';
import MenuBar from './Components/MenuBar/MenuBar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';


function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/courses">
            <MenuBar></MenuBar>
            <Courses></Courses>
            <Footer></Footer>
          </Route>

          <Route path="/about">
             <MenuBar></MenuBar>
            <About></About>
            <Footer></Footer>

          </Route>

          <Route path="/contact">
             <MenuBar></MenuBar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>

          <Route path="/enroll/:id">
            <MenuBar></MenuBar>
            <Enroll></Enroll>
            <Footer></Footer>
          </Route>

          <Route path="*">
              <Error></Error>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
