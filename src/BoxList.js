import React, {Component} from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
                {color:"yellow", width: "200", height: "150"}
            ]
        }
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
                {this.renderBoxes()}
                <NewBoxForm />
            </div>
        );
    } 
}

export default BoxList;