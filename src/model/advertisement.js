const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
nome do anúncio

cliente

data de início

data de término

investimento por dia
*/
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

mongoose.model('advertisement', advertisementSchema)
