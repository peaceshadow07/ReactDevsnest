import React from 'react'
import { useRef } from 'react';

export default function Counter() {
    const count = useRef(0);
    const handleClick = ()=>{
        count.current = count.current + 1;
        alert("New Count : " + count.current);
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me !</button>
    </div>
  )
}
