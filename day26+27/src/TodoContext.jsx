// TO do the state management in single place we moved the state management logic into one place.

import React, { useReducer } from 'react'
import { useContext } from 'react';
import { createContext } from "react";
import todoReducer from './TodoReducerRC';


let initialTodos = [{id : 1,text:"Learn Javascript", done : true},
{id : 2,text:"create Spotify clone", done : false},
{id : 3,text:"Learn react", done : false}];

export const todoContext = createContext(null);
export const dispatchContext = createContext(null); 



export default function TodoProvider({children}) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <todoContext.Provider value = {todos}>
        <dispatchContext.Provider value = {dispatch}>
            {children}
        </dispatchContext.Provider>
    </todoContext.Provider>
  )
}


export const useTodos = ()=> useContext(todoContext);
export const useDispatch = ()=>useContext(dispatchContext);