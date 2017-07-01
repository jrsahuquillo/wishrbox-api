'use strict'

const express = require('express')
const wishCrtl = require('../controllers/wish')
const userCrtl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/wish', wishCrtl.getWishes)
api.get('/wish/:wishId', wishCrtl.getWish)
api.post('/wish', auth, wishCrtl.saveWish)
api.put('/wish/:wishId', auth, wishCrtl.updateWish)
api.delete('/wish/:wishId', auth, wishCrtl.deleteWish)
api.post('/signup', userCrtl.signUp)
api.post('/signin', userCrtl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: `Access accepted` })
})

module.exports = api
