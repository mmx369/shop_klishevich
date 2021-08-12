import mongoose, { Document } from 'mongoose'
import { number } from 'yup/lib/locale'
const Schema = mongoose.Schema

interface INewOrder extends Document {
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
  date: Date
}

const newOrder = new Schema<INewOrder>({
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
  date: Date,
})

// to avoid overwrite errror???
// @ts-ignore
mongoose.models = {}

const NewOrder = mongoose.model<INewOrder>('NewOrder', newOrder)

export default NewOrder
