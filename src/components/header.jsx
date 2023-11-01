import React from "react";
import css from "./head.module.css"
function Header(){
    return <header>
        <div className={css.cont}>
        <img className = {css.images}src="download.jpeg"/> 
        <h1>
        Keep It
        </h1>
        </div>
        </header>
}

export default Header;