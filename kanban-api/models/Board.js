var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
  title: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Board', BoardSchema);
