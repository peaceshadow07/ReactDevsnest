import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Layout } from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element = {<Layout/>}>
  <Route path="/contacts/:contactId" element={<h2>Contact:s</h2>}></Route>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
)
