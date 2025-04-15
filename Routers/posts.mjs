import express from 'express';
import { client, database } from '../connection/connection.mjs';
const postRouter = express.Router();


postRouter.post('/post',async (req,res)=>{

    try{
        const haiku = database.collection("haiku");


        const doc = {
            title: "Second Record of a Shriveled Datum",
            content: "Second No bytes, no problem. Just insert a document, in MongoDB",
          }
          // Insert the defined document into the "haiku" collection
          const result = await haiku.insertOne(doc);
          // Print the ID of the inserted document
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
          res.send(`A document was inserted with the _id: ${result.insertedId}`);
    
    }catch(e){
        console.error(e);
    }
    finally {
        // Close the MongoDB client connection
       await client.close();
     }
  



});
postRouter.get('/post',async (req,res)=>{
    try{
        const haiku = database.collection("haiku");
        // Query the "haiku" collection
        const query = { title: "Second Record of a Shriveled Datum" };
        const result = await haiku.find().toArray();
        // Print the result
        console.log(result);
        res.send(result);
    }catch(e){
        console.error(e);
    }
    finally {
        // Close the MongoDB client connection
       await client.close();
     }
})
export default postRouter;