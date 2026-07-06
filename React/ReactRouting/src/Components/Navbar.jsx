/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    // a tag ka use nahi kia kyuki full page reload ho raha tha to humne Link use kia par link ka use karke 
    // vo to realod  vali problem to solve ho gayi par jab hame use link ko visted dikhana ho to isliye hum navlink ka use karte hain
  return (
    <div>
        <ul>
            <li>
                 <NavLink to="/" 
                 className={({isActive})=>isActive?"active-link": ""}>
                 Home
                 </NavLink>
            </li>
            <li>
                <NavLink to="/about" 
                className={({isActive})=>isActive?"active-link": ""}>
                About
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard"
                className={({isActive})=>isActive?"active-link": ""}>
                Dashboard
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar