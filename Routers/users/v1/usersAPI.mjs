import express from 'express';

const userRouterV1 = express.Router();
// get-> /users

userRouterV1.get('/users',(req,res)=>{

    res.send("This is V1 of users GET API")
   })
  
  
   // get-> /user
   
  userRouterV1.get('/user',(req,res)=>{
  
    res.send("This is V1 of user GET API")
   })
  // post-> /user
  
  userRouterV1.post('/user',(req,res)=>{
  
    res.send("This is V1 of user POST API")
   })
  // put-> /user
  
  userRouterV1.put('/user',(req,res)=>{
  
    res.send("This is V1 of user PUT API")
  })
  // delete-> /user
  
  userRouterV1.delete('/user',(req,res)=>{
  
    res.send("This is V1 of user DELETE API")
  });
  
  export default userRouterV1;