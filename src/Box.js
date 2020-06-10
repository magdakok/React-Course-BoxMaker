import React, {Component} from 'react';
import "./Box.css";

class Box extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
        this.props.removeBox(e);
    }


    render(){
      return (
          <div className="Box" style={{
            "backgroundColor":this.props.color, 
            "width":`${this.props.width}px`, 
            "height":`${this.props.height}px`}}>
            <button onClick={this.handleRemove} id={this.props.boxId}>REMOVE</button>
          </div>
        );
    } 
  }

export default Box;