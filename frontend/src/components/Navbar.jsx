import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.webp";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import AboutUs from "./AboutUs";
import SlotBooking from "./SlotBooking";
import Profile from "./Profile";
import Home from "./Home";

function Navbar(){
    return(
        <BrowserRouter>
            <nav className="navbar">
                <div className="logo">
                    <div className="logoImg">
                        <img src={logo} href="/"/>
                    </div>
                    <Link to="/" className="logoText">
                        IIITDM<br/>Kancheepuram
                    </Link>
                </div>
                
                <ul className="navList">
                    <li>
                        <Link to="/aboutus">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/slotbooking">
                            Slot Booking
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li id="auth-btn">
                        <Link to="/auth/google/" className="signIn">
                            Sign In
                        </Link>
                    </li>
                </ul>
                {/* <div className="bx bx-menu" id="menu-icon"></div> */}
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutUs" element={<AboutUs />}></Route>
                <Route path="/slotbooking" element={<SlotBooking />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>        
    )
}

export default Navbar;