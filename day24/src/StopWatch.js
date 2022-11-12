import React, { useState } from 'react'
import { useRef } from 'react';
import App from './App'
import './App.css'
export default function StopWatch() {

    const startTime = useRef(null);
    const timer = useRef(null);
    const [now,setNow] = useState(null);
    const [laps,setLaps] = useState([]);

    let secondsElapsed = 0;
    
    function startStopWatch(){
        console.log("started");
        startTime.current = Date.now();
        setLaps([]);
        timer.current  = setInterval(()=>{
            setNow(Date.now());
        },10);
    }

    function stopStopWatch(){
        console.log("Stopped");
        clearInterval(timer.current);
        secondsElapsed = 0;
    }

    function trackLap(){
        setLaps([...laps,secondsElapsed]); 
    }

    secondsElapsed = (now - startTime.current)/1000;
  return (
    <>
    <div>
      <h1>{secondsElapsed.toFixed(3)}</h1>
      <button onClick={startStopWatch}>Start</button>
      <button onClick={stopStopWatch}>Stop</button>
      <button onClick={trackLap}>Lap</button>
    </div>
    
        {
            laps?.length ? 
            ( <article>
                <h2>LAPS</h2>
                {laps.map((lap) => (<p key={lap}>{lap}</p>))}
             </article> ):
             null
        }
    
    </>
  )
}
