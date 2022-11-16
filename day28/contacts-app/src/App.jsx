/** @jsxImportSource @emotion/react */
// /** @jsx jsx */
// import { jsx } from '@emotion/core'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import {css} from '@emotion/react'

// const struct = css`
// display : grid;
// background-color : red;
// grid-template-columns : minmax(250px, 25%) 1fr;`;


function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Contacts App</h1>
  )
}

function Sidenav(){
  return (
    <aside css={css`
    padding: 16px;
    border-right: 1px solid;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height : 100%;`}>
      <header css={css`
                      border-bottom: 1px solid;
                      padding: 16px;`}>
        <from css={css`display :flex;
        justify-content: space-between;`}>
          <input type="text" />
          <button>Search</button>
        </from>
      </header>
      <section css={css`
      padding:16px;`}>List of Contacts</section>
      <footer css={css`
      padding:16px;
      border-top: 1px solid;`}>Footer</footer>
    </aside>
  );
}

function Content(){
  return (
    <section>
        <Outlet/>
      </section>
  )
}

export function Layout(){
  return (
    <>
    <main css = {css`
    display: grid;
    height: 100%;
    grid-template-columns : min(250px 25%) 1fr;
    `} >
      {/* <aside>Side nav</aside> */}
      <Sidenav/>
      <Content/>
    </main>
    </>
  );
}
export default App
