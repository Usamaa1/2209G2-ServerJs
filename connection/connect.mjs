
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://dbuser:dbpassword@mycluster.u99q8.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
export const database = client.db("2209G2_Db");
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    // Ensures that the client will close when you finish/error
    console.log(error)
    await client.close();
    process.exit();
  }
}
run()



process.on('SIGINT', async () => {

    await client.close();
    process.exit()
  });

export default client;


