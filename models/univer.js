let mongoose = require("mongoose");

let univerSchema = new mongoose.Schema({
  name: String,
  type: String,
  region: String,
  city: String,
  adress: String,
  active: {
    type: Boolean,
    default: 1,
  },
});

module.exports = mongoose.model("univer", univerSchema);
