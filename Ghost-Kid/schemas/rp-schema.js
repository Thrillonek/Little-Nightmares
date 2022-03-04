const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  temper: { type: String, required: true },
  lifestory: { type: String, required: true },
  look: { type: String, required: true },
});

module.exports = model("roleplay", schema)