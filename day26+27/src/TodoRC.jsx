
import React, { useReducer, useState } from 'react'
// import { createContext } from 'react';
import AddTodoRC from './AddTodoRC';
import TodoProvider from './TodoContext';
import TodoListRC from './TodoListRC';

                    // let nextId = 4;

// state is same as todos object in useState version
// function todoReducer(todos, action){
//     switch(action.type){
//         case "add":
//             return [...todos, {id : action.id, text : action.text, done : false}];
//         case "change":
//             const updatedTodo = action.updatedTodo;
//             return todos.map( (todo) =>
//             todo.id == updatedTodo.id ? updatedTodo : todo
//         );
//         case "remove":
//             return todos.filter((todo)=> todo.id !== action.id);
//         default: return todos;
//     }
// }

export default function TodoRC() {

    // function handleAddTodo(text){
    //     dispatch({
    //         type:"add",
    //         id:nextId++,
    //         text
    //     })
    //     // setTodos([...todos,{
    //     //     id:nextId++,
    //     //     text,
    //     //     done:false,
    //     // }],)
    // }


//     function handleTodoChange(updatedTodo){
//         // dispatch({
//         //     type:"change",
//         //     updatedTodo
//         // });
//         // setTodos(todos.map( (todo) =>
//         //     todo.id == updatedTodo.id ? updatedTodo : todo
//         // )   
//     // )
// }

    // function handleTodoDelete(id){
    //     dispatch({
    //         type:"remove",
    //         id
    //     });
    //     //   setTodos(todos.filter((todo)=> todo.id !== id));
    // }


  return (
    <TodoProvider>
            <div className='todo'>
            To-Dos
            <AddTodoRC/>
            <TodoListRC/>
            </div>
    </TodoProvider>
  )
}
