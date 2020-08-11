var mongoose = require('mongoose');
var crypto = require('crypto');
var db = mongoose.connect("mongodb://localhost:27017/top_prepod");
var prepodModel = require("./models/prepod");
var studentModel = require("./models/student");

// new prepod
exports.createPrepod = function (prepodData) {
  let prepod = {
    name: {
      firstName: prepodData.prepodInputName,
      lastName: prepodData.prepodInputSurname,
      patr: prepodData.prepodInputPatrnonymic,
    },
    email: prepodData.prepodInputEmail,
    password: prepodData.prepodInputPassword,
    region: prepodData.prepodInputRegion,
    city: prepodData.prepodInputCity,
    idUniver: prepodData.prepodInputUniversity,
    idScience: prepodData.prepodInputScience,
    idSpec: prepodData.prepodsciencesInputSpec,
    profession: prepodData.prepodInputProf,
    miniDescript: prepodData.prepodTAdescriptmin,
    active: 1,
  }
  return new prepodModel(prepod).save()
}

// get 1 prepod
exports.getPrepod = function (id) {
  return prepodModel.findOne(id)
}

// new student
exports.createStudent = function (studentData) {
  let student = {
    name: {
      firstName: studentData.studentInputName,
      lastName: studentData.studentInputSurname,
      patr: studentData.studentInputPatrnonymic,
    },
    email: studentData.studentInputEmail,
    password: studentData.studentInputPassword,
    region: studentData.studentInputRegion,
    city: studentData.studentInputCity,
    idUniver: studentData.studentInputUniversity,
    idScience: studentData.studentInputScience,
    idSpec: studentData.studentInputSpec,
    course: studentData.examleSelectCourse,
    active: 1,
  }
  return new studentModel(student).save()
}

//get 1 student
exports.getStudent = function (id) {
  return studentModel.findOne(id)
}

//auth prepod
exports.checkPrepod = function (prepodData) {
  return prepodModel
    .findOne({
      email: prepodData.prepodInputEmail
    })
    .then(function (doc) {
      if (doc.password == hash(PrepodData.prepodInputPassword)) {
        console.log("User password is ok");
        return Promise.resolve(doc)
      } else {
        return Promise.reject("Error wrong")
      }
    })
}

//auth stud
exports.checkStudent = function (studentData) {
  return studentModel
    .findOne({
      email: studentData.studentInputEmail
    })
    .then(function (doc) {
      if (doc.password == hash(studentData.studentInputPassword)) {
        console.log("User password is ok");
        return Promise.resolve(doc)
      } else {
        return Promise.reject("Error wrong")
      }
    })
}

function hash(text) {
  return crypto.createHash('sha1')
    .update(text).digest('base64')
}