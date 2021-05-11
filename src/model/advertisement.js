const mongoose = require('mongoose')
const Schema = mongoose.Schema

const advertisementSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateExpirated: {
    type: Date,
    required: true
  },
  investiment: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('advertisement', advertisementSchema)
