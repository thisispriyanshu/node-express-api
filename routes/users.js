import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router=express.Router();

const users=[];

router.get('/',(req,res)=>{
    // console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    // console.log("POST ROUTE REACHED")
    const user=req.body;

    const userWithId = { ...user, id: uuidv4()}

    users.push(userWithId)
    res.send(`User with the first name ${user.firstName} added to the database`)
});


export default router;