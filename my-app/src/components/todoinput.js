import React, { Component } from 'react'
import '../css/todoinput.css'

class todoinput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event)=>
    {
        this.setState(
            {
                value:event.target.value
            }
            
        )
        console.log(this.state.value)
    }
    handleSubmit =(event)=>
    {
        event.preventDefault();
        const {value} = this.state;
        const {onChange} = this.props;
        if(value !=='')
        {
            onChange(value)
            this.setState(
                {
                    value:''
                }
            )
        }
    }
    
    render() {
        return (
            <div className="ToDoInput">
                <h1>TO DO LIST</h1>
                <form onSubmit={this.handleSubmit}>
                <label><h5>Add Work</h5></label>
                <input type='text' placeholder='add work to do' value={this.state.value} onChange={this.handleChange} className="todowork"></input>
                <button type='submit' onClick={this.onSubmit} className="todoadd">ADD</button>
                </form>
            </div>
        )
    }
}
export default  todoinput;