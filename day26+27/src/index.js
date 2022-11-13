import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDo from './ToDo';
import TodoUseReducer from './TodoUseReducer';
import CreateContext from './CreateContext';
import TodoRC from './TodoRC';
import Parent from './THA/Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToDo/> */}
    {/* <TodoUseReducer/> */}
    {/* <CreateContext/> */}
    {/* <TodoRC/> */}
    <Parent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
