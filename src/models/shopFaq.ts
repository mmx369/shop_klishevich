import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema

interface IFaq extends Document {
  answer: string
  question: string
  date: Date
}

const faq = new Schema<IFaq>({
  answer: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
  },
  question: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
  },
  date: Date,
})

// @ts-ignore
//avoid OverwriteModelError
mongoose.models = {}

const Faq = mongoose.model<IFaq>('Faq', faq)

export default Faq
