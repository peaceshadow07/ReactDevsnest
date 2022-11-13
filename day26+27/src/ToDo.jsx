import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';


let initialTodos = [{id : 1,text:"Learn Javascript", done : true},
                    {id : 2,text:"create Spotify clone", done : false},
                    {id : 3,text:"Learn react", done : false}];

let nextId = 4;

export default function ToDo() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(text){
        setTodos([...todos,{
            id:nextId++,
            text,
            done:false,
        }],)
    }


    function handleTodoChange(updatedTodo){
        setTodos(todos.map( (todo) =>
            todo.id == updatedTodo.id ? updatedTodo : todo
        )   
    )}

    function handleTodoDelete(id){
      setTodos(todos.filter((todo)=> todo.id !== id));
    }


  return (
    <div className='todo'>
      To-Dos
      <AddTodo onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete}/>
    </div>
  )
}
