import mongoose from 'mongoose'
const { Schema } = mongoose

mongoose.Promise = global.Promise

const JuegosSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  platino: {
    type: Boolean,
    required: false,
    default: null
  }

},{ timestamps: true })

export default mongoose.models.juegos || mongoose.model('juegos', JuegosSchema)
