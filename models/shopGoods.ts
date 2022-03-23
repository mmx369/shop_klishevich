import mongoose, { Document, Types } from 'mongoose'
const Schema = mongoose.Schema

interface IShopGoods extends Document {
  nameOfGoods: string
  amountOfGoods: number
  priceOfGoods: number
  catalogNumber: string
  country: string
  category: string
  imagePath: string[]
  date: Date
  _doc: any
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

// to avoid overwrite errror???
// @ts-ignore
mongoose.models = {}

const ShopGoods = mongoose.model<IShopGoods>('ShopGoods', shopGoods)

export default ShopGoods
