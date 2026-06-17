/* eslint-disable no-unused-vars */
import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
         <button onClick={props.handleClick}>
            {props.text}
    </button>
    
    </div>
   
  )
}

export default Button
