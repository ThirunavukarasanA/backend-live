const mongoose = require("mongoose");

const Enquiry = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createat: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("enquireform", Enquiry);
