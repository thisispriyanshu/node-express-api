import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router=express.Router();

let users=[];

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

router.get('/:id',(req,res)=>{
    const {id}=req.params
    const foundUser=users.find((user)=> user.id== id)
    res.send(foundUser)
})

router.delete(':/id',(req,res)=>{
    const {id}=req.params
    users=users.filter((user)=>user.id != id) 
    res.send(`User with id {id} deleted from the database`)
})

export default router;