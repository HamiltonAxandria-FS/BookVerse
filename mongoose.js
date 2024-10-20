const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://axandria:4aUXjHHXFD6fbjYg@cluster0.47alk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

