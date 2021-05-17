import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/portfolio">
            <Header />
            <Portfolio />
            <Footer />
          </Route>

          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
