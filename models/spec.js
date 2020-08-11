let mongoose = require("mongoose");

let specSchema = new mongoose.Schema({
  name: String,
  idscience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "science",
  },
  active: {
    type: Boolean,
    default: 1,
  },
});

module.exports = mongoose.model("Spec", specSchema);
