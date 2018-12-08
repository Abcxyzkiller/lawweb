import React, { Component } from 'react'
import "./menu.css"
import { Button } from 'reactstrap';
import Aboutus from './aboutUs'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Menu extends Component {
  
  render() {
    return (
      <div className="container-fluid">
          <div style={{padding: "13px"}} className="col-md-4">
            <img src = "http://crystalwrightlaw.com/wp-content/uploads/2017/08/Logo-cwl.png" alt="" 
                  className="menu-logo rounded-circle"></img>
            <Link to="/" style={{fontSize: "30px",paddingTop: "35px", color:'inherit', textDecoration:'none'}}><span ><strong>Luật Giao Thông</strong></span></Link>
          </div>
          <form className="col-md-6" style={{paddingTop: "20px"}}>
              <input className="input" placeholder="Tìm kiếm...." style={{paddingLeft: "10px", fontSize: "16px"}}/>
              <Button  color="link" style={{borderRadius: "10px", height: "25px"}}>
                  <i style={{fontSize: "20px", marginLeft: "-75px",marginTop: "-7px"}} className="fas fa-search"></i>
              </Button>
          </form>
          <div className="col-md-2" style={{padding: "25px", fontSize: "18px"}}>
          <Link to="/about" style={{color:'inherit', textDecoration:'none'}}><Aboutus/></Link>
          </div>
      </div>
    )
  }
}


