import React, {Component} from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';
import "./BoxList.css";
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
                {color:"yellow", width: "200", height: "150", id: uuidv4() },
            ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        let newBox = {...box, id: uuidv4()}
        this.setState(st =>({
            boxes: [...st.boxes, newBox]
        }))
    }

    removeBox(box){

    }

    renderBoxes(){
        return (
            this.state.boxes.map(box =>(
                <Box color={box.color} width={box.width} height={box.height} key={box.id} boxId ={box.id} removeBox={this.removeBox}/>
            ))
        )
    }

    render(){
        return (
            <div className="BoxList">
                <NewBoxForm addBox={this.addBox} />
                <div className="BoxList-container">
                {this.renderBoxes()}
                </div>
            </div>
        );
    } 
}

export default BoxList;