import mongoose from 'mongoose'

const JuegosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

})

export default mongoose.models.Juegos || mongoose('Pet', JuegosSchema)