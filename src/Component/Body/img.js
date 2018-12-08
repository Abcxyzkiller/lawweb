import React, { Component } from 'react'
import {Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class img extends Component {
  render() {
    return (
      <div>
        <img  style={{width: "100%", height: "585px"}} src = "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <div>
        <Link to="/more"><Button outline id="inner" color='info'>Xem thêm</Button></Link>
        </div>
      </div>
    )
  }
}