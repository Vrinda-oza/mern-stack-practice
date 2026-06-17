import './App.css'

function App() {

  function handleClick(){
      alert("I am Clicked");
  }

  function handleMouseOver(){
    alert("para k upar mouse lekaar aaye ho");
  }

  function handleInputChnge(e){
    //console.log("Input me value change hui he");
    console.log("value till now:",e.target.value);
  }
function handleSubmit(e){
  e.preventDefault();
  //i aam writing my custom behaviour down
  alert("form submit kedu kya");

}


  return (
    <div>
      
      <button onClick={()=>alert("Button clicked")}>
        {/* //this formate called the FATRO function formate if we define the function directly without using => this is called the immediate  invoked function without click automatic submit the data   */}
        Click me
      </button>



      {/* <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleInputChnge} />
        <button type='submit'>Submit</button>
      </form> */}
      
      {/* <p onMouseOver={handleMouseOver} style={{color:"blue", margin:"1px",padding:"1px", border:"1px solid black"}}>
      I am para

      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}


     </div>
     
  )
}

export default App
