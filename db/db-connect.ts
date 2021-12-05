import { MongoClient } from 'mongodb'

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  return client
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db()
  const documents = await db.collection(collection).find().sort(sort).toArray()
  return documents
}
