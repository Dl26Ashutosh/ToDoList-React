import React, { Component } from 'react'
import '../css/todolist.css'

class todolist extends Component {          
    render() {
        const {list} = this.props;
        return (
            <>
            <div className="ToDoListContainer" >
                {list.map((item,index)=>
                {
                   return ( <li key={index} className="todolist">{item}<button onClick={() => {this.props.onDelete(index)}} className="DelButton">Delete</button></li>)
                })}
            </div>
            </>
        ) 
    }
}

export default todolist;
