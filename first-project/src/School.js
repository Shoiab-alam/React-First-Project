import React from "react";
import { NavLink } from "react-router-dom";
const School = () => {
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
            <h1>School</h1>
        </div></>
    )
}

export default School;