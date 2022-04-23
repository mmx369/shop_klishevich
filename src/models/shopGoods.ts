import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface IShopGoods extends Document {
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  catalogNumber?: string
  country: string
  category: string
  imageUrl: string[]
  date: Date
  _id: string
}

const shopGoods = new Schema<IShopGoods>({
  nameOfGoods: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
  },
  amountOfGoods: Number,
  priceOfGoods: Number,
  catalogNumber: String,
  country: String,
  category: String,
  imageUrl: [String],
  date: Date,
})

//@ts-ignore
//avoid OverwriteModelError
mongoose.models = {}

const ShopGoods = mongoose.model<IShopGoods>('ShopGoods', shopGoods)

export default ShopGoods
