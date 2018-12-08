import React, { Component } from 'react'
import {Button} from 'reactstrap';
import './body.css'
import Collapse from './collapse'
import Img from './img'


export default class Body extends Component {
    constructor(props){
        super();
        this.state = {
         data:   [
                {
                    id: 1,
                    name: "Xe máy",
                    icon: "fas fa-motorcycle"
                },
                {
                    id: 2,
                    name: "Ô tô",
                    icon: "fas fa-car-side"
                },
                {
                    id: 3,
                    name: "Xe đạp",
                    icon: "fas fa-bicycle",
                },
                {
                    id: 4,
                    name: "Các loại xe khác",
                    icon: "far fa-hand-point-right"
                }
            ]
            
        }
    }
    showVehicle=()=>{
        return(    this.state.data.map(vehicle =>
            <div >
                    <Collapse style={{width: "100%", fontSize: "18px"}} icon={vehicle.icon} name={vehicle.name}/>
            </div>
                )

        )
    }
  render() {
    return (
      <div className="container-fluid">
        <span className="col-md-3" >
            <Button style={{height: "35px", width: "100%",borderColor: "black", backgroundColor: "black",fontSize: "17px"}}>DANH MỤC</Button>
            {this.showVehicle()}
        </span>
        <div className="col-md-1"/>
        <div className="col-md-8"> 
            <Img/>
            
        </div>
      </div>
    )
  }
}
