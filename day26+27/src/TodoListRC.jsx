import React from 'react'
import { useContext } from 'react';
import { useDispatch, useTodos } from './TodoContext';
import { dispatchContext, todoContext } from './TodoRC';

export default function TodoListRC() {
    // const todos = useContext(todoContext);
    const todos = useTodos();    
    return (
      <ul>
        {todos.map( (todo) => 
            <li key={todo.id}>
                <Todo todo={todo} />
            </li>
        )}
      </ul>
  )
}


function Todo({todo}){
    // const dispatch  = useContext(dispatchContext);
    const dispatch = useDispatch();
    return (
        <>
        <input type='checkbox' name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} 
        onChange={(e)=> {
            dispatch({
                type:"change",
                updatedTodo : {...todo, done : e.target.checked}
            })
        }}/>
        {todo.text}
        <button onClick={()=>{dispatch({
            type:"remove",
            id: todo.id
        })}}>X</button>
        </>
    );
}