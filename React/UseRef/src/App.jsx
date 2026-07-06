/* eslint-disable no-unused-vars */
import './App.css'
import { useState ,useEffect,useRef} from 'react'

function App() {
  
  /* //it's called use state hook because it is a 
  // function which is used to manage the state of
  //  a component in react. It returns an array
  //  with two elements: the current state value
  //  and a function to update that state value.
    
  const [count,setCount] = useState(0);
    
    
     //useRef is a hook that allows you to create a mutable
    //  reference to a value that persists across renders of
    //  a functional component. It returns an object with a 
    // current property that can be used to store and access the value.

    let val = useRef(0);
    let btnRef = useRef();

    function handleIncrement(){
      
      val.current=val.current+1;
      console.log("Vlue of val:",val);
      setCount(count+1);
    }

    function changeColor(){
      btnRef.current.style.backgroundColor="red";
    }



    //it returns on every render of the component.
    //  It is used to perform side effects in a functional
    //  component, such as fetching data, updating the DOM,
    //  or subscribing to events.
    useEffect(() => {
      console.log("I'm rendering now" );
    })
   */  //shift+alt+a to comment the multiline code in vs code

  const[time,setTime]=useState(0);
  
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time=> time+1);

    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);

  }



  
  return (
    <div >
     {/*  <button
       ref={btnRef}
      onClick={handleIncrement}>
        Increment
      </button>
      <br/>
      <br/>
      <button onClick={changeColor}>
        Change color of 1st button
      </button>
      <div>
        Count:{count}
      </div> */}

      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br/>
      <br/>
      <br/>
      <button onClick={stopTimer}>Stop</button>
      <br/>
      <br/>
      <br/>
      <button onClick={resetTimer}>Reset</button> 

    </div>
  )
}

export default App
