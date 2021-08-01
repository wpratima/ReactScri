import React from 'react'

function TodoItem (props){
    console.log(props)
    return(
        <div className='todo-item' key={props.todo.id}>
            <input type='checkbox' checked = {props.todo.completed} onChange = {()=>{console.log('checked')}}/>
            <p>{props.todo.text}</p>
        </div>
    
    );
}
export default TodoItem;