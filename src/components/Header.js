import React, { Component } from 'react';
import logo from '../logo.png';

export default class Header extends Component {

  render() {
    return (
      <nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://bulma.io">
      <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" />
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
      <span class="icon" style={{color: '#333'}}>
        <i class="fab fa-github"></i>
      </span>
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
      <span class="icon" style={{color: '#55acee'}}>
        <i class="fab fa-twitter"></i>
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
        <span class="bd-emoji">🎨</span> &nbsp;Expo
      </a>
      <a class="navbar-item " href="http://bulma.io/love/">
        <span class="bd-emoji">❤️</span> &nbsp;Love
      </a>
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style={{color: '#333'}}>
          <i class="fab fa-github"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style={{color: '#55acee'}}>
          <i class="fab fa-twitter"></i>
        </span>
      </a>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
              <span class="icon">
    <i class="fab fa-twitter"></i>
  </span>
              <span>
    Tweet
  </span>
            </a>

          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
    //   <nav class="navbar is-transparent">
    //     <div class="navbar-brand">
    //     <a class="navbar-item" href="/">
    //       <img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" />
    //     </a>
    //       <div class="navbar-burger burger" data-target="navMenuColorprimary-example">
    //         <span></span>
    //         <span></span>
    //         <span></span>
    //       </div>
    //     </div>
    //
    //     <div class="navbar-end">
    //       <div class="navbar-item">
    //       <a class="navbar-item" href="#">
    //         Home
    //       </a>
    //       <a class="navbar-item" href="#">
    //         About
    //       </a>
    //       <a class="navbar-item" href="#">
    //         Projects
    //       </a>
    //       <a class="navbar-item" href="#">
    //         Contact
    //       </a>
    //       </div>
    //     </div>
    // </nav>
    );
  }
}
