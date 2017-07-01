'use strict'

const express = require('express')
const wishCrtl = require('../controllers/wish')
const api = express.Router()

api.get('/wish', wishCrtl.getWishes)
api.get('/wish/:wishId', wishCrtl.getWish)
api.post('/wish', wishCrtl.saveWish)
api.put('/wish/:wishId', wishCrtl.updateWish)
api.delete('/wish/:wishId', wishCrtl.deleteWish)

module.exports = api
