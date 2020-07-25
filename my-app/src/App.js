import React, { Component } from 'react';
import './App.css';
import ToDoInput from './components/todoinput'
import ToDoList from './components/todolist'
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list :[]
    }
  }

  removeItem = (index) =>{
    this.setState(
      {
        trash:this.state.list.splice(index,1)
      }
    )  
}


  AddToDO = (listItem) =>
{
  const {list} = this.state;
  this.setState(
    {
      list:[...list,listItem]
    }
  )
  console.log(list)
}
  

  render(){
  return (
    <div className='ToDoContainer'>
      <ToDoInput onChange={this.AddToDO}/>
      <ToDoList list={this.state.list} onDelete={this.removeItem}/>
    </div>
  );
}
}


export default App;
