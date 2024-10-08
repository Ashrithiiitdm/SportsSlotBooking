import express from "express";
import pg from "pg";

const app = express()
const port = 8000;

const db = new  pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Sports',
    password: 'veeresh123',
    port: 5432
});

//post route for profile 
app.post("/profile",(req, res)=>{
    console.log("Started..");    
});

//post route for slot booking
app.post("/slot-booking", (req,res)=>{
    console.log("Started..");
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});
