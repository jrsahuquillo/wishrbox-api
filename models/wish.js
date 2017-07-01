'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishSchema = Schema({
  title: String,
  description: String,
  image: String,
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['to have', 'to live']
  }
})

module.exports = mongoose.model('Wish', WishSchema)
