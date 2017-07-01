'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/wish', (req, res) => {
  res.status(200).send({wish: []})
})

app.get('/api/wish/:wishId', (req, res) => {

})

app.post('/api/wish', (req, res) => {
  console.log(req.body)
  res.status(200).send({message: 'Wish has received'})
})

app.put('/api/wish/:wishId', (req, res) => {

})

app.delete('/api/wish/:wishId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/wishrbox', (err, res) => {
  if (err) {
    return console.log(`❌  Database connection error: ${err}`)
  }
  console.log('✅  Successful connection to Database - 📦 💻')

  app.listen(port, () => {
    console.log(`✅  API REST running in http://localhost:${port}`)
  })

})
