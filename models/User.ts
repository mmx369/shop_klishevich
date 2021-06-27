import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface IUser extends Document {
  email: string
  name: string
  role: 'admin' | 'client'
  date: Date
  passwordHash: string
  orders: string[]
}

const user = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    default: 'client',
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders',
    },
  ],
})

// to avoid overwrite errror???
// @ts-ignore
mongoose.models = {}

const User = mongoose.model<IUser>('User', user)

export default User
