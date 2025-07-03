const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const db = process.env.MONGO_DB;

let client;

const connectDB = async () => {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Conectado a MongoDB');
  }
  return client.db('admin');
};

module.exports = { getDB: connectDB };
