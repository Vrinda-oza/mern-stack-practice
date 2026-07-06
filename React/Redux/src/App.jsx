import './App.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset,incrementByAmount } from './Features/Counter/CounterSlice';

function App() {

    const [amount, setAmount] = useState(0);

    const count =useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  
  }

  function handleResetClick() {
    dispatch(reset());
  
  }
  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
   <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/><br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/><br/>
      <input type="number" 
      placeholder="Enter amount"
      value={amount}
       onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={() => dispatch((handleIncAmountClick))}>Increment by Amount</button>
   </div>
  )
}

export default App
