import logo from './logo.svg';
import './App.css';
import Header from'./Header';
import Footer from './Footer';
import TimeOfDay from './TimeOfDay';
import TodoItem from './TodoItem';
import todosData from './todosData';
import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
}
  
  handleChange(id){
    console.log("in handlechange", id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        console.log("in handlechange", todo.completed)
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div>
        <Header/>
        <div className='todo-list'>
          {/* <Counter/> */}
          {todoItems}
        </div>
      </div>
     
    );

  }
  
}

export default App;
