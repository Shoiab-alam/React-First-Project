import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (<>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink to='/' style={{fontSize:'20px',color:'black'}}>CODER</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                                
                                <span className="navbar-text">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to='/' className='nav-link' activeClassName='menu_active'>Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/service' className='nav-link' activeClassName='menu_active'>Services</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/about' className='nav-link' activeClassName='menu_active'>About Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to='/contact' className='nav-link' activeClassName='menu_active'>Contact Us</NavLink>
                                            </li>  
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </>)
}
export default Navbar;