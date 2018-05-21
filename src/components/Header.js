import React, { Component } from 'react';
import logo from '../logo.png';

import {Link} from 'react-router-dom';

function toggleNav() {
  let nav = document.getElementById("navbar-menu");
  let className = nav.getAttribute("class");
  if (className === "navbar-menu") {
    nav.className = "navbar-menu is-active";
  } else {
    nav.className = "navbar-menu";
  }
}

export default class Header extends Component {

  render() {
    return (
      <div className="container is-fluid">
        <nav class="navbar ">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src={logo} alt="Roy Lee - Singapore Web Designer/Developer" />
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://github.com/roy-lee" target="_blank">
              <span class="icon" style={{color: '#333'}}>
                <i class="fab fa-github"></i>
              </span>
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://roylee1.typeform.com/to/mOARTJ" target="_blank">
              <span class="icon" style={{color: '#FC3C63'}}>
                <i class="fas fa-comment"></i>
              </span>
            </a>

            <div class="navbar-burger burger nav-toggle" onClick={toggleNav} >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" id="navbar-menu">
            <div class="navbar-start">
              <Link to="/" class="navbar-item ">Home</Link>
              <Link to="/about" class="navbar-item ">About</Link>
              <Link to="/projects" class="navbar-item ">Projects</Link>
              <Link to="/contact" class="navbar-item ">Contact</Link>
            </div>

            <div class="navbar-end">
              <a class="navbar-item is-hidden-desktop-only" href="https://github.com/roy-lee" target="_blank">
                <span class="icon" style={{color: '#333'}}>
                  <i class="fab fa-github"></i>
                </span>
              </a>
              <div class="navbar-item">
                <p class="control">
                  <a class="button is-danger" href="https://roylee1.typeform.com/to/mOARTJ" target="_blank">
                    <span class="icon">
                      <i class="fas fa-comment"></i>
                    </span>
                    <span>Request for Proposal</span>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}
