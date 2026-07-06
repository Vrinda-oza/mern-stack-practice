import React from 'react'

const ChildCommponents = React.memo((props) => {
    console.log("child component go re render again")
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}


        </button>
    </div>
  )
})

export default ChildCommponents
//React.memo -->wrap -->component -->component re-render 
// only when props chnage.otherwise it will not re-render.

//if you are sending function ,then react.ememo will not 
// work because function is always new reference. so it will re-render.

//when parent component re-render then the function will be created 
// again and it will be new reference. so child component will re-render.