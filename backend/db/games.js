import db from './db.js';

const getGames = async () =>{
    try{
        res = await db.query(`SELECT * FROM Games`);
        return res.rows;
    }
    catch(err){
        console.log("Error fetching games");
    }
}

const getSlots = async (game, type) =>{
    try{
        res = await db.query(`SELECT s.slot_id, s.slot_time
            FROM slots s
            JOIN bookings b ON s.slot_id = b.slot_id
            JOIN games g ON b.game_id = g.game_id 
            WHERE g.gname = $1 AND b.booking_type = $2 AND b.rem_slots > 0;
        `, [game, type]);
        return res.rows;
    }
    catch(err){
        console.log("Error fetching slots");
    }
}

const getCost = async (game, type) =>{
    try{
        res = await db.query(`SELECT C.gcost, G.gname 
            FROM Cost C 
            JOIN Games G ON C.game_id = G.game_id 
            WHERE G.gname = $1 AND C.booking_type = $2`
            , [game, type]);
        return res.rows;
    }
    catch(err){
        console.log("Error fetching cost");
    }
}

export default {getGames, getSlots, getCost};