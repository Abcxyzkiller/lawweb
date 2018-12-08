import React, { Component } from 'react'
import {Collapse, Button, CardBody, Card} from 'reactstrap';
export default class collapse extends Component {
    constructor(props){
        super();
        this.state = { collapse: false};
    }
    toggle=()=>{
        this.setState({ collapse: !this.state.collapse})
    }
  render() {
    return (
      <div>
        <Button className="text" color="secondary" onClick={this.toggle} style={this.props.style}>
                <i className={this.props.icon} style={{marginRight: "10px"}}></i>
                {this.props.name}
        </Button>
        <Collapse isOpen={this.state.collapse}>
            <Card>
                <CardBody>
                        <ul>
                            <li style={{listStyleType: "none"}}>abcjdhf</li>
                        </ul>
                </CardBody>
            </Card>
        </Collapse>
      </div>
    )
  }
}
