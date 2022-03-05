const mongoose = require('mongoose');

const embedSchema = mongoose.Schema({
  userID: { type: String, required: true },
  serverID: {type: String, required: true },
  title: { type: String },
  description: { type: String },
  color: { type: String },
  thumbnail: { type: String },
  img: { type: String },
  url: { type: String },
  footer: { type: String },
})

module.exports = mongoose.model("embeds", embedSchema)