/* eslint-disable no-unused-vars */
import React from 'react'
import PHOTO from '../assets/PHOTO.jpeg'
import "./Usercard.css"
const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id="user-img"src={props.image} alt="Vrinda" />
        <p id='user-desc'>{props.desc}</p>

      
    </div>
  )
}

export default Usercard
