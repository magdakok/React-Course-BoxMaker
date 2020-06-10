import React, {Component} from 'react';
import "./NewBoxForm.css";

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {color:"#c258df", width:"", height:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({color:"#c258df", width:"", height:""});
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render(){
      return (
          <div className="NewBoxForm">
            <h1>Create a new box</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="NewBoxForm-container">
                    <div className="NewBoxForm-group NewFormBox-color">
                        <label htmlFor='color'>Color</label>
                        <input
                            id='color'
                            type='color'
                            name='color'
                            value={this.state.color}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="NewBoxForm-group NewFormBox-width">
                        <label htmlFor='width'>Width (px)</label>
                        <input
                            id='width'
                            type='number'
                            min='100'
                            max={document.documentElement.clientWidth-150}
                            step='100'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="NewBoxForm-group NewFormBox-height">
                        <label htmlFor='height'>Height (px)</label>
                        <input
                            id='height'
                            type='number'
                            min='30'
                            max={document.documentElement.clientHeight}
                            step='100'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                            />
                    </div>
                </div>
                
                    {/* <input type="range" id="volume" name="volume"
         min="0" max="11" /> */}
                <button>CREATE</button>
            </form>
          </div>
        );
    } 
  }

export default NewBoxForm;