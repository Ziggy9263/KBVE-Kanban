var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  workedBy: String,
  board: Number,
  state: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Card', CardSchema);
