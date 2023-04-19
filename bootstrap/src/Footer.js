import React from "react";

const Footer =  () => {
    const footer = {
        position: 'fixed',
        height: '50px',
        bottom: '0',
        width: '100%'
        }
    const date = new Date().getFullYear()
    return(<>
        <footer className="bg-dark text-center text-white d-flex justify-content-center flex-column" style={footer}>
            <p>© {date} Technical Team. All Rights Reserved | Terms and Conditions</p>
        </footer>
    </>)
}

export default Footer;