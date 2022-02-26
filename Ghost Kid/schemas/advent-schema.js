const mongoose = require('mongoose')

const ecoSchema = mongoose.Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 0 },
  reward: { type: Boolean, default: true },
})

module.exports = mongoose.model('advent', ecoSchema);