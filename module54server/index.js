const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3213;

app.use(cors());
app.use(express.json());

//details
// username: mahbubsarwar5
// password: VYwp7asnMgjHmSGQ


const uri = "mongodb+srv://mahbubsarwar5:VYwp7asnMgjHmSGQ@cluster0.h0zb1dz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const users = database.collection("users");

    app.get('/users', async(req, res)=>{
      const cursor = users.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/users', async(req, res)=>{
        const user = req.body;
        const result = await users.insertOne(user);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send("Running Module 54 Server");
})

app.listen(port, ()=>{
    console.log('listening');
})