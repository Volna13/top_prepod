let mongoose = require("mongoose");

let scienceSchema = new mongoose.Schema({
  name: String,
  active: {
    type: Boolean,
    default: 1,
  },
});

module.exports = mongoose.model("Science", scienceSchema);
