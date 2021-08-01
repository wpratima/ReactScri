import logo from './logo.svg';
import './App.css';
import Header from'./Header';
import Footer from './Footer';
import TimeOfDay from './TimeOfDay';
import TodoItem from './TodoItem';
import todosData from './todosData';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
  }
  render(){
    const todosComponents = this.state.todos.map( todo=>{
      return <TodoItem todo = {todo}/>
    })
    return (
      <div className='todo-list'>
        <Header/>
        {todosComponents}
      </div>
    );

  }
  
}

export default App;
