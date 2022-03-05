const mongoose = require('mongoose');

const ecoSchema = mongoose.Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  levels: { type: Number, default: 1 },
  warns: { type: Number, default: 0 },
})

module.exports = mongoose.model('economy', ecoSchema)