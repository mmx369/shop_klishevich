import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
    mongoose.set('bufferTimeoutMS', 30000)

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('Connected to MongoDB')
        return mongoose
      })
      .catch((err) => {
        console.log('Error on start: ' + err.stack)
        throw new Error("Сan't connect to database")
      })
  }

  cached.conn = await cached.promise

  return cached.conn
}
