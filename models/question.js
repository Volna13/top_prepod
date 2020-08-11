let mongoose = require("mongoose");

let questionSchema = new mongoose.Schema({
  num: Number,
  text: String,
});

module.exports = mongoose.model("Question", questionSchema);
