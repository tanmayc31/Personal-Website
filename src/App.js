import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
//import Footer from "./Footer";
import Resume from "./Resume";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch >
       <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Projects" component={Projects} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/Resume" component={Resume} />
       <Redirect to="/" />
    </Switch>

    </>
  );
};

export default App;
