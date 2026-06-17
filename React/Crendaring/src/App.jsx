/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Logoutbtn from './Components/Logoutbtn';
import Loginbtn from './Components/Loginbtn';

function App() {
const [isLoggedIn, setLoggedIn]=useState(false);
 
// if condition is flase if condition execute and does not let the run other code but is contion is true other below code will be run 
if(!isLoggedIn){
  return(
    <Loginbtn />
  )

}
//if condition is true button will be shown otherwise not 

return(
  <div>
    <h1>Welccome everyone</h1>
    <div>
      {isLoggedIn && <Logoutbtn />}
    </div>
  </div>
)







//using turnary condition rendering use 
// return(
//   <div>
//     {isLoggedIn ? <Logoutbtn /> : <Loginbtn /> }
//   </div>
// )






//using if else condition rendering use 
// if(isLoggedIn){
//   return(
//     <Logoutbtn>

//     </Logoutbtn>
//   )
// }
// else{
//   return(
//         <Loginbtn>

//         </Loginbtn>

//   )
  
// }
}

export default App
