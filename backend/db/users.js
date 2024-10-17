import db from "./db.js";

const getUsers = async () =>{
    try{
        res = await db.query("SELECT * FROM Users");
        return res.rows;
    }
    catch(err){
        console.log("Error fetching users");
    }
}

async function addUser(user){
    try{
        res = await db.query("INSERT INTO Users (uname, email) VALUES($1, $2)",[user.uname, user.email]);
        getUsers(user.email); 
    }catch(err){
        console.log("Error inserting data");
    }
}

export {getUsers, addUser};