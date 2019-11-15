const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  desc: { type: String, required: true },
  status: { type: Boolean, default: false },
  edited: { type: Boolean, default: false },
})

module.exports = Items = mongoose.model('items', ItemSchema);