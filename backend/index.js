import express from "express";
import passport from "./Auth/auth.js";
import { authenticateToken } from "./Auth/middleware.js";  
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const port = 8000;
app.use(cors({
    origin: "http://localhost:5173",  // Allow requests from your React frontend
    credentials: true,  
}));

app.get("/", (req, res) => {
    res.redirect("http://localhost:5173");
});

app.post("/profile", authenticateToken, (req, res) => {
  console.log("Profile route accessed by:", req.user);
  res.send(`Profile of user: ${req.user.name}`);
});


app.post("/slot-booking", authenticateToken, (req, res) => {
  console.log("Slot booking started by:", req.user);
  res.send("Slot booking in progress...");
});


app.get('http://localhost:5173/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { 
    failureRedirect: '/auth/google/failure' 
  }), (req, res) => {
    
    const token = jwt.sign(req.user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.render('localhost:5173', { token });
});

app.get('/auth/google/success', (req, res) => {
  res.send("<h1>Login successful</h1>");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
