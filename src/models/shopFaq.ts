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

// to avoid overwrite errror???
// @ts-ignore
mongoose.models = {}

const Faq = mongoose.model<IFaq>('Faq', faq)

export default Faq
