import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface INewOrder extends Document {
  email: string
  firstName: string
  secondName: string
  fatherName: string
  zip: string
  country: string
  region: string
  city: string
  address: string
  phone: string
  comments: string
  order: string[]
  totalPrice: number
  shippingPrice: number
  status: 'open' | 'paid' | 'shipped' | 'received' | 'closed'
  date: Date
}

const newOrder = new Schema<INewOrder>({
  email: String,
  firstName: String,
  secondName: String,
  fatherName: String,
  zip: String,
  country: String,
  region: String,
  city: String,
  address: String,
  phone: String,
  comments: String,
  order: [
    {
      _id: String,
      nameOfGoods: String,
      amountOfGoods: Number,
      priceOfGoods: Number,
    },
  ],
  totalPrice: Number,
  shippingPrice: Number,
  status: {
    type: String,
    default: 'open',
  },
  date: Date,
})

// @ts-ignore
//avoid OverwriteModelError
mongoose.models = {}

const NewOrder = mongoose.model<INewOrder>('NewOrder', newOrder)

export default NewOrder
