import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Sports",
    password:"veeresh123",
    port:5432
});

db.connect()

async function getUsers(email){
    try{
        res = await db.query(`SELECT * FROM Users WHERE email=${1}`,[email]);
        return res.rows;        
    }catch(err){
        console.log("Error fetch in users");        
    }
}

async function addUser(user){
    try{
        res = await db.query("INSERT INTO Users (uname, email) VAULES($1, $2)",[user.uname, user.email]);
        getUsers(user.email); 
    }catch(err){
        console.log("Error inserting data");
    }
}

export default {getUsers, addUser};