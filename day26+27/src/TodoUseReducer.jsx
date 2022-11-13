
import React, { useReducer, useState } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';


let initialTodos = [{id : 1,text:"Learn Javascript", done : true},
                    {id : 2,text:"create Spotify clone", done : false},
                    {id : 3,text:"Learn react", done : false}];

let nextId = 4;


// state is same as todos object in useState version
function todoReducer(todos, action){
    switch(action.type){
        case "add":
            return [...todos, {id : action.id, text : action.text, done : false}];
        case "change":
            const updatedTodo = action.updatedTodo;
            return todos.map( (todo) =>
            todo.id == updatedTodo.id ? updatedTodo : todo
        );
        case "remove":
            return todos.filter((todo)=> todo.id !== action.id);
        default: return todos;
    }
}

export default function TodoUseReducer() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    function handleAddTodo(text){
        dispatch({
            type:"add",
            id:nextId++,
            text
        })
        // setTodos([...todos,{
        //     id:nextId++,
        //     text,
        //     done:false,
        // }],)
    }


    function handleTodoChange(updatedTodo){
        dispatch({
            type:"change",
            updatedTodo
        });
        // setTodos(todos.map( (todo) =>
        //     todo.id == updatedTodo.id ? updatedTodo : todo
        // )   
    // )
}

    function handleTodoDelete(id){
        dispatch({
            type:"remove",
            id
        });
        //   setTodos(todos.filter((todo)=> todo.id !== id));
    }


  return (
    <div className='todo'>
      To-Dos
      <AddTodo onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete}/>
    </div>
  )
}
