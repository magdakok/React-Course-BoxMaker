import React, {Component} from 'react';

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
        this.setState({color:"", width:"", height:""});
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
                <label htmlFor='color'>Color:</label>
                <input
                    id='color'
                    type='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                    />
                <label htmlFor='width'>width:</label>
                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                    />
                <label htmlFor='height'>Height:</label>
                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                    />
                <button>CREATE</button>
            </form>
          </div>
        );
    } 
  }

export default NewBoxForm;