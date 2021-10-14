import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

const Navbar = () => {
  return (
    <Router>
      <nav className="nav-bar">
        <header id="logo" onClick={()=>window.location.href = '#'}>
          <h3>
            &lt;/<span>Sujith</span>&gt;
          </h3>
        </header>

        <div className="nav-elements">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <div
            id="nav-btn"
            target="_blank"
            rel="noopener"
            onClick={()=>window.open('mailto:mesujithks3@gmail.com')}
          >
            <p>Let's Talk</p>
          </div>
        </div>

        <svg
          className="ham hamRotate ham8"
          viewBox="0 0 100 100"
          width="60"
          onclick="this.classList.toggle('active')"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
