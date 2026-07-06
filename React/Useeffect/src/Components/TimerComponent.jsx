/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'

function TimerComponent() {
    const [seconds,setSeconds]=useState(0);

    useEffect(() => {
        const intervalid =setInterval(()=>{
            console.log("setIntervaal executed")
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);
     
        return()=>{
            //for the stop when the component will be unmounted like a remove from the app.jsx file
            console.log("time to stop");
            clearInterval(intervalid);
        };
    }, []);

    // it will run only on first render
    
  return (
    <div>
      <h1>Seconds:{seconds}</h1>
    </div>
  )
}

export default TimerComponent
