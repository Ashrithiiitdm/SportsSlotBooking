import React from "react";
import logo from '../assets/logo.jpg'
function Navbar(){
    return (
        <header>
            <div className="left">
            <div className="logoImg">
                <img src={logo}/>
            </div>
            <a href="https://iiitdm.ac.in" className="logoText">IIITDM<br/>Kancheepuram</a>
            </div>
            
            <ul className="navList">
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Slot Booking</a>
                </li>
                <li>
                    <a href="/">Profile</a>
                </li>
                <li>
                    <a href="/">SignIn</a>
                </li>
            </ul>
            {/* <ul className="navList">
                <li><a href="/aboutUs">About Us</a></li>
                <li><a href="/slotbooking">Slot Booking</a></li>
                <li><a href="/profile">Profile</a></li>
                <li id="auth-btn">
                <a href="/auth/google/" className="signIn">Sign In</a></li>
            </ul>
            <div className="bx bx-menu" id="menu-icon"></div> */}
        </header>
    )
}

export default Navbar;