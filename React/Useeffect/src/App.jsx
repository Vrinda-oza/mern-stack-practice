/* eslint-disable no-unused-vars */
import { useEffect,useState } from 'react'
import './App.css'
import LoggerComponent from './Components/LoggerComponent';
import TimerComponent from './Components/TimerComponent';
import DataFetcher from './Components/DataFetcher';
import ResizeComponent from './Components/ResizeComponent';
import MultiEffectComponent from './Components/MultiEffectComponent';

function App() {

    //const [count,setCount]=useState(0);
  
    // for the fourth variation
    //const [total,setTotal]=useState(1);

  // first ->side-effect function like: db connection,fetch api ,alert msg so this logic are write in the first
  // second ->cleanup function like prevent form the memory leack , and like a add event Listener on any component and now that component removed(unmount) so now i want to remove that particular eventListener so that time i will use this second  
  // third ->comma separated dependency list [bcz write in the array] like we write any entities on that entities basis use effect will be run 
  
  //   useEffect(() => {
  //   first
    
  
  //   return () => {
  //     second
  //   }
  // }, [third])



  //variation:1
  //runs on every render


  //   // if  use this code for the useeffect so this code always render 

   //execute this useeffect example with below function on by one with  variation 
// useEffect(() => {
//   alert("I will run on each render");
// })
    

//variation:2
//this runs on only first render
// useEffect(() => {
//   alert("i will run on only first render");

// }, [])


//variation:3
//it will also run on the first time because upper in the count in usestate we write the 0 value so it will count as a change that's why it shows on the first time 
// useEffect(() => {
//   alert("i will run every time when the count is updated");

// }, [count])


//variation:4
//multiple dependencies

// useEffect(() => {

//   alert("I will run every time when count/total is updated");
 
// }, [count,total])


//variation:5
// add a cleanup function

// useEffect(() => {
//   alert("count is updated");

//   return () => {
//     alert("count is unmounted from UI");//when the old value chnage like 3 to 4 update so that time this unmounted showed
//   }
// }, [count])



  
  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //       setTotal(total+1);

  // }

  return (
      <div>
        {/* <button onClick={handleClick}>
          Click me
        </button>
        <br/>
        Count is:{count}

        <br></br>
        <button onClick={handleClickTotal}>
          Update Total
        </button>
        <br/>
        Total is:{total} */}

          {/* <LoggerComponent></LoggerComponent> */}
            {/* <TimerComponent></TimerComponent> */}
            {/* <DataFetcher></DataFetcher> */}
              {/* <ResizeComponent></ResizeComponent> */}
              <MultiEffectComponent></MultiEffectComponent>

      </div>
  )
}

export default App
