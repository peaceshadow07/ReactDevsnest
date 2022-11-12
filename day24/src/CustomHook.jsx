import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function CustomHook() {
    const [userName, setUserName] = useLocalStorage("username","");
  return (
    <fieldset>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
    </fieldset>
  )
}
