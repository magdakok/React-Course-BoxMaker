import React, {Component} from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';
import "./BoxList.css";

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
                {color:"yellow", width: "200", height: "150"},
                {color:"pink", width: "160", height: "200"}
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(box){
        let newBox = {...box}
        this.setState(st =>({
            boxes: [...st.boxes, newBox]
        }))
    }

    renderBoxes(){
        return (
            this.state.boxes.map(box =>(
                <Box color={box.color} width={box.width} height={box.height}/>
            ))
        )
    }

    render(){
        return (
            <div className="BoxList">
                <NewBoxForm addBox={this.addBox}/>
                <div className="BoxList-container">
                {this.renderBoxes()}
                </div>
            </div>
        );
    } 
}

export default BoxList;