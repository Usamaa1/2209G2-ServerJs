import express from 'express';
import { client, database } from '../connection/connection.mjs';
const sortRouter = express.Router();


export default sortRouter.get('/products/sort', async (req, res) => {
   
        try {
             
          const Product = database.collection("products");
          
          const { sort = 'date', order = 'desc' } = req.query;
          const sortOptions = {
            price: { price: order === 'asc' ? 1 : -1 },
            date: { createdAt: order === 'asc' ? 1 : -1 },
            rating: { averageRating: order === 'asc' ? 1 : -1 }
          };
      
          const products = Product.find()
              .sort(sortOptions[sort] || { createdAt: -1 });
      
          res.send(products);
        } catch (err) {
          res.status(500).send({ error: "Server error" });
        }

})






