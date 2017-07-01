'use strict'

const Wish = require('../models/wish')

function getWish (req, res) {
  let wishId = req.params.wishId

  Wish.findById(wishId, (err, wish) => {
    if (err) return res.status(500).send({ message: `Request error: ${err}` })
    if (!wish) return res.status(404).send({ message: `Wish not found` })

    res.status(200).send({ wish })
  })
}

function getWishes (req, res) {
  Wish.find({}, (err, wishes) => {
    if (err) return res.status(500).send({ message: `Request error: ${err}` })
    if (!wishes) return res.status(404).send({ message: `Wishes not found` })

    res.status(200).send({ wishes })
  })
}

function saveWish (req, res) {
  console.log('POST /api/wish')
  console.log(req.body)

  let wish = new Wish()
  wish.title = req.body.title
  wish.description = req.body.description
  wish.image = req.body.image
  wish.price = req.body.price
  wish.category = req.body.category

  wish.save((err, wishStored) => {
    if (err) res.status(500).send({message: `❌  Database saving error: ${err} `})

    res.status(200).send({wish: wishStored})
  })
}

function updateWish (req, res) {
  let wishId = req.params.wishId
  let update = req.body

  Wish.findByIdAndUpdate(wishId, update, (err, updatedWish) => {
    if (err) res.status(500).send({ message: `Updating wish error: ${err}`})

    res.status(200).send({ wish: updatedWish })
  })
}

function deleteWish (req, res) {
  let wishId = req.params.wishId

  Wish.findById(wishId, (err, wish) => {
    if (err) res.status(500).send({ message: `Deleting wish error: ${err}`})

    wish.remove(err => {
      if (err) res.status(500).send({ message: `Deleting the wish error: ${err}`})
      res.status(200).send({ message: `Wish has been deleted`})
    })
  })
}

module.exports = {
  getWish,
  getWishes,
  saveWish,
  updateWish,
  deleteWish,
}
