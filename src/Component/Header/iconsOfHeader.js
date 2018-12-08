import React, { Component } from 'react'
import './heade.css'
export default class iconsOfHeader extends Component {
  render() {
    return (
      <div style={{color: "white"}}>
            <i className="fab fa-facebook-square header-icon"  ></i>
            <i className="fas fa-envelope header-icon"></i>
            <i className="fab fa-twitter-square header-icon"></i>
            <i className="fas fa-sign-in-alt header-icon"></i>
      </div>
    )
  }
}
