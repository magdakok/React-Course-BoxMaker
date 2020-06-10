import React, {Component} from 'react';
import "./Box.css";

class Box extends Component {
    render(){
      return (
          <div className="Box" style={{
            "backgroundColor":this.props.color, 
            "width":`${this.props.width}px`, 
            "height":`${this.props.height}px`}}>
            <button>REMOVE</button>
          </div>
        );
    } 
  }

export default Box;