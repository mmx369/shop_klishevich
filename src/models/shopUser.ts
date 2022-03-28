import mongoose, { Document, Types } from 'mongoose'
import { ERole } from '../types/ERole'

const Schema = mongoose.Schema

interface IShopUser extends Document {
  email: string
  name: string
  role: ERole.Admin | ERole.Client
  date: Date
  passwordHash: string
  orders: Types.ObjectId
  cart: any[]
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
  cart: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'ShopGoods',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
})

//@ts-ignore
mongoose.models = {}

const ShopUser = mongoose.model<IShopUser>('ShopUser', shopUser)

export default ShopUser
