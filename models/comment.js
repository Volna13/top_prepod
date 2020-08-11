let mongoose = require("mongoose");

let comentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  prepodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prepod",
  },
  text: String,
  createTime: Date,
  anon: Boolean,
});

module.exports = mongoose.model("Coment", comentSchema);
