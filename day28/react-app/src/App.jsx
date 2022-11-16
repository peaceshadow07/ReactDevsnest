import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {css} from "@emotion/react"
function App() {
  // const [count, setCount] = useState(0)


  const btn = css`
  padding : 8px;
  color : black`;

  const primary = css`
  background-color : royalblue;
  color :  green`;

  return (
    <>
    <div 
    css={css({
      backgroundColor : "grey",
      color : "white",
      "&:hover" :{
        backgroundColor:"pink"
      }
    })}
    >
      <section css={css`
      display: grid;
      grid-template-rows: auto 200px;
      `}>
        <h1>This is a section</h1>
        <p>this is a para</p>
      </section>
    </div>
    <button css={btn}>Button</button>
    </>
  )
}

export default App
