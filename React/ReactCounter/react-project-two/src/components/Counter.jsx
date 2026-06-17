/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    //count is the variable of the state and setcount is the function of the counter.
    //and this two things provide by the usestate and init value of the usestate is 0 so we set the value 0.
    const[count,setCount]=useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
