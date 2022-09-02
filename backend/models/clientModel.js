import mongoose from 'mongoose'

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    currentAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    age: {
      type: Number,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Client = mongoose.model('Client', clientSchema)

export default Client
