import React, { useState } from 'react'
import { useContext } from 'react';
import { useDispatch } from './TodoContext';
import { dispatchContext } from './TodoRC';
let nextId = 4;
export default function AddTodoRC({onAddTodo}) {
    // const dispatch = useContext(dispatchContext);
    const dispatch = useDispatch();
  const [text,setText] = useState("");
    return (
    <div>
      <input type="text" name='newTodo' id='newTodo' value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={()=>{
        dispatch({
            type:"add",
            id:nextId++,
            text
        });
        setText("");
      }}>Add</button>
    </div>
  )
}
