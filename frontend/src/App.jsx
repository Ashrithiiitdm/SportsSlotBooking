import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"/>
        <Route path="/aboutUs"/>
        <Route path="/slotbooking"/>
        <Route path="/profile"/>
      </Routes>
      <Footer/>
    </Router>    
  );
};

export default App;