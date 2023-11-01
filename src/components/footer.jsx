import React from "react";

function Footer(){
    const currentYear= new Date().getFullYear();
    return <footer>
    <p>
        Copyright © tmonga2208 {currentYear}
    </p>
    </footer>
}

export default Footer;