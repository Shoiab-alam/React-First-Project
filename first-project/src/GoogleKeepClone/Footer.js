import React from "react";


const Footer = () => {
    let time =  new Date().getFullYear()
    return(<>
        <div className="">
            <div className="flex justify-center items-end">
            <p className="fixed bottom-5">copyright © {time}</p>
            </div>
        </div>
    </>)
}
export default Footer;