import React, { useState } from 'react'


const pizzaToppings = [
  {
    id: 'a',
    topping:"Onion"
  },
  {
    id: 'b',
    topping:"Olive"
  },
  {
    id: 'c',
    topping:"Jalepeno"
  },
  {
    id: 'd',
    topping:"Pineapple"
  }
]


export default function PizzaToppings() {
  const [toppings, setToppings] = useState(pizzaToppings);
  console.log(toppings);
  function removeTopping(topping){
    setToppings(toppings.filter( item => item !== topping));
  }
  return (
    <ul>
      {toppings.map( item => 
        <li key={item.id}>
            <label htmlFor={item.topping}>{item.topping}</label>
            <input type="text" id={item.id} name={item.topping} defaultValue={item.topping}></input>
            <button onClick={()=>removeTopping(item)}>X</button>
        </li>
      )}
    </ul>
  )
}
