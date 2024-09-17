import { app } from "./app.js";
import dotenv from 'dotenv';
import connectdb from './db/index.js'
dotenv.config({
    path : './.env'
});

const port = process.env.PORT || 5500;  

connectdb()
.then(() => {
    app.listen(port, ()=>{
        console.log(`Server is listening on ${port}...`);
    });
})
.catch((err) => {
    console.log("Mongoose db connection error");
});

