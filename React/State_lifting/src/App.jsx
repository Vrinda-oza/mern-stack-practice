import { useState } from 'react';
import './App.css'
import Card from './Components/Card'

function App() {
  //parent will do the below work because when we wqant to pass the some work to the other child 
  // like one child to second child or one sibling to another siblings so we are use the state lifting
  // beacause this all work do by the parent and like 1st chind pass the work to the parent, then parent pass tha twork to the another child 
  // because one child or sibling can't direct pass the work with eachother
  // so all the work do the sync and state will be sunc
  //create state
  //manage state
  //change state
  // state will be sync in every chind
const [name,setName] = useState('');
  return (
  <div>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      
      {/* //sibling element if we do changes in first card element that changes will appear in another card also */}
      
      {/* <p>i am inside parent component and value of name is {name}</p> */}


  </div>   
  
  )
}

export default App
