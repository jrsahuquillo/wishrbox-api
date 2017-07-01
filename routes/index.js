'use strict'

const express = require('express')
const wishCrtl = require('../controllers/wish')
const auth = require('..middlewares/auth')
const api = express.Router()

api.get('/wish', wishCrtl.getWishes)
api.get('/wish/:wishId', wishCrtl.getWish)
api.post('/wish', wishCrtl.saveWish)
api.put('/wish/:wishId', wishCrtl.updateWish)
api.delete('/wish/:wishId', wishCrtl.deleteWish)
api.get('/private', auth.isAuth, function(req, res) {
  res.status(200).send({ message: `Access accepted` })
})

module.exports = api
