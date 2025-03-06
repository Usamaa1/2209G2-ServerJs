import express from 'express';

const commentRouterV2 = express.Router();
 // get-> /comment
 
 commentRouterV2.get('/comments',(req,res)=>{

    res.send("This is V2 of comments GET API")
   })
 
 commentRouterV2.get('/comment',(req,res)=>{

    res.send("This is V2 of comment GET API")
   })
  // post-> /comment
  
  commentRouterV2.post('/comment',(req,res)=>{
  
    res.send("This is V2 of comment POST API")
   })
  // put-> /comment
  
  commentRouterV2.put('/comment',(req,res)=>{
  
    res.send("This is V2 of comment PUT API")
  })
  // delete-> /comment
  
  commentRouterV2.delete('/comment',(req,res)=>{
  
    res.send("This is V2 of comment DELETE API")
  });
  

  export default commentRouterV2;
  