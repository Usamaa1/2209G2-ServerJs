import express from 'express';
import { client, database } from '../connection/connection.mjs';
const searchRouter = express.Router();


 searchRouter.get('/products/search', async (req, res) => {
   
        try {
             
          const Product = await database.collection("products");
          
          const { q } = req.query;
    
          const products = await Product.find({
            $or: [
              { name: { $regex: q, $options: 'i' } },
              { description: { $regex: q, $options: 'i' } }
            ]
          });
          res.send(products);
        } catch (err) {
          res.status(500).send({ error: "Server error" });
        }

})


export default searchRouter;



