import { useState ,useMemo} from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0);
  const [input,setInput] = useState(0);

  function expensiveTask(num){
    console.log("Expensive Task is running");

    for(let i=0;i<1000000000;i++) {

    }

          return num*2;

  
  }

  // let doubleValue = expensiveTask(4);//after call the this function will run slowly 
 
  // let doubleValue = expensiveTask(input);//after call the this function will run slowly


  //here we use useMemo hook to avoid the expensiveTask function to run 
  // again and again when we change the count value because we only want
  //  to run this function when input value changes.
  //only last value of input will be stored in the memory and when we
  //  change the count value
  // this function will not run again and again because we have used 
  // useMemo hook here.

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (

    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count:{count}
      </div>

      <input
        type="number"
        placeholder='Enter a number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double Value:{doubleValue}
      </div>
    </div>
  )
}

export default App
