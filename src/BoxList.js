import React, {Component} from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  render(){
    return (
        <div className="BoxList">
            <Box />
            <NewBoxForm />
          
        </div>
      );
  } 
}

export default BoxList;