import './App.css'
import { useState,useCallback } from 'react'
import ChildCommponents from './Components/ChildCommponents';

function App() {

  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[]);

  //if we are not provide the value  in the dependency array 
  // and it will freeze the value of count and it will not change 
  // the value of count.

  //upper function defined using useCallback hook and it will return 
  // the same refrence of the function until the dependency array changes.

  //now this will be freezed and will not be re-created again and again and also refrence will not change. 
  // and it will prevent the child component from  not the re-render.


  return (
    <div>
      <div>
        Count: {count}
        </div>
        <br/>
       
        <div>

          <button onClick={handleClick}>Increment</button>
        </div>

        <br/>
        <br/>

        <div>
          
            <ChildCommponents buttonName="Child Button"
            handleClick={handleClick} />
          
        </div>

      </div>
    
  )
}

export default App
