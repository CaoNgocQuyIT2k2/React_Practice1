import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
<div className="container ">
  <div className=" jumbotron banner text-center bg-light banner_title ">
    <h1 style={{ fontSize: '3rem', color: 'black', fontWeight: 'bold' }}>A warm welcome!</h1>
   
    <p className='banner_text'>Bootstrap utility classes are used to create this jumbotron since the old component has been <br /> removed from the framework. Why create custom CSS when you can use utilities?</p>
    <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
  </div>

</div>
    )
  }
}
