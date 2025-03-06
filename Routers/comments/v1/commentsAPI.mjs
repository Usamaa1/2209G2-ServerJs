import express from 'express';

export const commentRouterV1 = express.Router();


// get-> /comments

commentRouterV1.get('/comment',(req,res)=>{

    res.send("This is V1 of comment GET API")
   })
  
  
   // get-> /comment
   
  commentRouterV1.get('/comments',(req,res)=>{
  
    res.send("This is V1 of comments GET API")
   })
  // post-> /comment
  
  commentRouterV1.post('/comment',(req,res)=>{
  
    res.send("This is V1 of comment POST API")
   })
  // put-> /comment
  
  commentRouterV1.put('/comment',(req,res)=>{
  
    res.send("This is V1 of comment PUT API")
  })
  // delete-> /comment
  
  commentRouterV1.delete('/comment',(req,res)=>{
  
    res.send("This is V1 of comment DELETE API")
  });
  
  