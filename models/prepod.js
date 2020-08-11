const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/db");

const prepodSchema = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
    patr: String,
  },
  email: String,
  password: String,
  profession: String,
  region: String,
  city: String,
  idUniver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "univer",
  },
  idScience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Science",
  },
  idSpec: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spec",
  },
  miniDescript: String,
  descript: String,
  oldWork: String,
  education: String,
  img: Buffer,
  active: {
    type: Boolean,
    default: 1,
  },
});

const prepod = (module.exports = mongoose.model("prepod", prepodSchema));

// get 1 prepod by login
module.exports.getPrepodByEmail = function (email, callback) {
  const query = { email: email };
  prepod.findOne(query, callback);
};

// get 1 prepod by id
module.exports.getPrepodById = function (id, callback) {
  prepod.findById(id, callback);
};

// new prepod
module.exports.addPrepod = function (newPrepod, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newPrepod.password, salt, (err, hash) => {
      if (err) throw err;
      newPrepod.password = hash;
      newPrepod.save(callback);
    });
  });
};

//Validaton Password
module.exports.comparePass = function (passFromUser, userDBPass, callback) {
bcrypt.compare(passFromUser, userDBPass, (err, isMatch)=>{
  if (err) throw err;
  callback(null, isMatch);
  });
};