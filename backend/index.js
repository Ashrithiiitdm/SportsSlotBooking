import express from "express";
import passport from "./Auth/auth.js";

const app = express()
const port = 8000;

//post route for profile 
app.post("/profile",(req, res)=>{
    console.log("Started..");    
});

//post route for slot booking
app.post("/slot-booking", (req,res)=>{
    console.log("Started..");
});

app.get('/auth/google', (req, res) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })
});

app.get('/auth/google/callback', (req, res) => {
    passport.authenticate('google', {
        successRedirect: '/auth/google/sucess',
        failureRedirect: '/auth/google/failure'
    })
});

app.get('/auth/google/success', (req, res) => {
    res.render('<h1>Login successful</h1>');
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});
