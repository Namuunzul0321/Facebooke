import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

// MongoClient instance-г глобал object-д хадгалах (dev environment-д reconnect-оос сэргийлэх)
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Хөгжүүлэлтийн үед глобал объект ашиглана
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production-д шинэ client connect хийнэ
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectDB() {
  const client = await clientPromise;
  return client.db("Facebook"); // чиний Atlas database нэр
}
