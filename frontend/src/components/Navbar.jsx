import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.webp";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <div className="logoImg">
                    <img src={logo}/>
                </div>
                <a className="logoText">IIITDM<br/>Kancheepuram</a>
            </div>
            
            
            <ul className="navList">
                <li><a href="/aboutUs">About Us</a></li>
                <li><a href="/slotbooking">Slot Booking</a></li>
                <li><a href="/profile">Profile</a></li>
                <li id="auth-btn">
                <a href="/auth/google/" className="signIn">Sign In</a>
                </li>
            </ul>
            {/* <div className="bx bx-menu" id="menu-icon"></div> */}
        </nav>
    )
}

export default Navbar;