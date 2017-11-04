const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { typs: Boolean, default: false }
});

module.exports = recipientSchema;
