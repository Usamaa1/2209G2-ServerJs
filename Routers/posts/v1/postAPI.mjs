import express from "express";
import client from "../../../connection/connect.mjs";
import {database} from "../../../connection/connect.mjs";
import { ObjectId } from "mongodb";

const postRouter = express.Router();


postRouter.post('/posts',async (req,res)=>{

  try {
    // Connect to the "insertDB" database and access its "haiku" collection
   
    const postCollection = database.collection("post");
   

    // console.log("Request body: ")
    // console.log(req.body)

    const result = await postCollection.insertOne({
      title: req.body.postTitle,
      description: req.body.postDescription
    });

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.status(200).send({message: "Data inserted"})
    // Print the ID of the inserted document
  } catch(e) {
    res.status(403).send({message: "Data insertion Failed"})
    console.error(e)
     // Close the MongoDB client connection
    await client.close();
  }




})

 postRouter.get('/posts',async (req,res)=>{

  try {

    const post = await database.collection("post").find().toArray();
    // Print the document returned by findOne()
    console.log(post);
    res.status(200).send(post)
  } catch(e) {
    console.log(e)
    res.send({message: "Post not found"})
    await client.close();
  }

 });


 postRouter.get('/posts/:search',async (req,res)=>{

  try {

    const post = await database.collection("post").findOne({title: new RegExp(req.params.search)});
    // Print the document returned by findOne()
    console.log(post);
    res.status(200).send(post)
  } catch(e) {
    console.log(e)
    res.send({message: "Post not found"})
    await client.close();
  }

 })

//  postRouter.get('/posts/:id',async (req,res)=>{

//   try {

//     const post = await database.collection("post").findOne({_id: new ObjectId(req.params.id)});
//     // Print the document returned by findOne()
//     console.log(post);
//     res.status(200).send(post)
//   } catch(e) {
//     console.log(e)
//     res.send({message: "Post not found"})
//     await client.close();
//   }

//  })






 postRouter.delete('/posts/:id',async (req,res)=>{

  try {

    const post = await database.collection("post").deleteOne({_id: new ObjectId(req.params.id)});
    // Print the document returned by findOne()
    console.log(post);
    res.status(200).send({message: "Item Deleted"})
  } catch(e) {
    console.log(e)
    res.send({message: "Post not deleted"})
    await client.close();
  }

 })

 postRouter.put('/posts/:id',async (req,res)=>{

  try {

    const post = await database.collection("post").updateOne({_id: new ObjectId(req.params.id)},{
      $set:{
        title: req.body.postTitle,
        description: req.body.postDescription
      }
    });
    // Print the document returned by findOne()
    console.log(post);
    res.status(200).send({message: "Item Updated"})
  } catch(e) {
    console.log(e)
    res.send({message: "Post not Updated"})
    await client.close();
  }

 })

export default postRouter;



