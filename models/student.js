let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/db");

const studentSchema = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
    patr: String,
  },
  email: String,
  password: String,
  region: String,
  city: String,
  idUniver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "univer",
  },
  idScience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "science",
  },
  idSpec: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spec",
  },
  cource: Number,
  descript: String,
  img: String,
  active: {
    type: Boolean,
    default: 1,
  },
});

const student = (module.exports = mongoose.model("student", studentSchema));

// get 1 student by login
module.exports.getStudentByEmail = function (email, callback) {
  const query = {
    email: email
  };
  student.findOne(query, callback);
};

// get 1 studnt by id
module.exports.getStudentByEmail = function (id, callback) {
  student.findById(id, callback);
};

// new student
module.exports.addStudent = function (newStudent, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newStudent.password, salt, (err, hash) => {
      if (err) throw err;
      newStudent.password = hash;
      newStudent.save(callback);
    });
  });
};
