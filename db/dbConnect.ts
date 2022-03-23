import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
  try {
    mongoose.set('bufferTimeoutMS', 30000)
    let conn = await mongoose.connect(MONGODB_URI, opts)
    console.log('Connected to MongoDB')
    return conn
  } catch (err) {
    console.log(err)
  }
}
