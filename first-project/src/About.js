import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
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
            <h1>About</h1>
        </div></>
    )
}

export default About;