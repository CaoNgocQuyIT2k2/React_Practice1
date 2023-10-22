import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container text-light">
          <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav ml-auto  ">
                  <li class="nav-item " >
                      <a class="nav-link text-white" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-secondary" href="#">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-secondary" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-secondary" href="#">Contact</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

    )
  }
}