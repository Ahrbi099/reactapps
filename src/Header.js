import React from "react";


export default function Header(){
    return(
    <header>
    <nav className="nav">
        <h1> Personal Blogs</h1>
        <img className="nav--icon" scr="./blogger-icon.png"/>
    <ul className="nav-items">
        <li> Main Page </li>
        <li> Profile</li>
    </ul>
    </nav>
</header>
    )
}