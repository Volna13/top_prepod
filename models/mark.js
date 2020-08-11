let mongoose = require("mongoose");

let markSchema = new mongoose.Schema({
  StudentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  prepodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prepod",
  },
  anon: Boolean,
});

module.exports = mongoose.model("Mark", markSchema);
