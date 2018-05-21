import React, { Component } from 'react';
import logo from '../logo.png';

export default class Header extends Component {

  render() {
    return (
      <nav class="navbar ">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src={logo} alt="Roy Lee - Singapore Web Designer/Developer" />
          </a>

          <a class="navbar-item is-hidden-desktop" href="https://github.com/roy-lee" target="_blank">
            <span class="icon" style={{color: '#333'}}>
              <i class="fas fa-comment"></i>
            </span>
          </a>

          <div class="navbar-burger burger" data-target="navMenubd-example">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenubd-example" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item " href="http://bulma.io/expo/">
              Home
            </a>
            <a class="navbar-item " href="http://bulma.io/expo/">
              About
            </a>
            <a class="navbar-item " href="http://bulma.io/expo/">
              Project
            </a>
            <a class="navbar-item " href="http://bulma.io/love/">
              Contact
            </a>
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
    );
  }
}
