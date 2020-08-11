let mongoose = require("mongoose");

let answerSchema = new mongoose.Schema({
  num: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  value: Number,
  markId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "mark",
  },
});

module.exports = mongoose.model("Answer", answerSchema);
