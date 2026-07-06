/* eslint-disable no-unused-vars */
import { createContext } from 'react'
import './App.css'
import ChildA from './Components/ChildA';
import { useState } from 'react';

//step1: create context

 const UserContext = createContext();

//step2:wrap all the child inside a provider 
//step3: pass value
//step4: consume from the consumer

const ThemeContext = createContext();


function App() {

    const [user,setUser] = useState({name:"vrinda"});

    const[theme,setTheme] = useState ('light');

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme ==='light'?'beige':'black'}}>
        <ChildA></ChildA>

        </div>
      </ThemeContext.Provider>


      </UserContext.Provider>
      
      {/* <UserContext.Provider value={user}>
      <ChildA/>
      </UserContext.Provider> */}

    </ >
  )
}

export default App
 export {UserContext}
export{ThemeContext}
