import express from "express";
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

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});
