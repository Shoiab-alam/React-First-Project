import React from "react";
import logo from'./images/logo-removebg-preview.png'

const Header = () => {
    return(<>
        <div className="bg-yellow-500 flex items-center">
            <img src={logo} alt='Logo' className="h-20" />
            <h1 className="text-white font-bold text-3xl uppercase underline mx-20">Google Keep</h1>
        </div>
    </>)
}
export default Header;