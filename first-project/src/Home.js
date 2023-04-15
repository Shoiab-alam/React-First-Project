import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (

   <>
    <div>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
                </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                    <NavLink to='/school'>School</NavLink>
                </li>
        </ul>
    </div>
    <h1>Home</h1>
</> 
  )
}

export default Home;