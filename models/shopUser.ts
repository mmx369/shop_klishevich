import mongoose, { Document } from 'mongoose'
import { ERole } from '../types/ERole'
const Schema = mongoose.Schema

interface IShopUser extends Document {
  email: string
  name: string
  role: ERole.Admin | ERole.Client
  date: Date
  passwordHash: string
  orders: string[]
}

const shopUser = new Schema<IShopUser>({
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    default: ERole.Client,
  },
  name: String,
  date: Date,
  passwordHash: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ShopOrders',
    },
  ],
})

// to avoid overwrite errror???
// @ts-ignore
mongoose.models = {}

const ShopUser = mongoose.model<IShopUser>('ShopUser', shopUser)

export default ShopUser
