const express = require("express");
const router = express.Router();

const univerModel = require("../models/univer");
const scienceModel = require("../models/science");
const specModel = require("../models/spec");
const prepodModel = require("../models/prepod");
const studentModel = require("../models/student");
const {
  response
} = require("../app");

router.get("/", async function (req, res, next) {
  const regions = await univerModel.find().distinct("region");
  const cities = await univerModel.find().distinct("city");
  const univers = await univerModel.find({}, "_id name").sort("name");
  const sciences = await scienceModel.find({}, "_id name");
  const specs = await specModel.find({}, "_id name");
  var regionsSort = regions.sort();
  var citiesSort = cities.sort();

  res.render("signup", {
    title: "Регистрация",
    regions: regionsSort,
    cities: citiesSort,
    univers: JSON.parse(JSON.stringify(univers)),
    sciences: JSON.parse(JSON.stringify(sciences)),
    specs: JSON.parse(JSON.stringify(specs)),
  });
});

////////////////////////////////////////////////////////////REGISTRATION

// Регистрация преподаввателя
router.post("/prepod", function (req, res, next) {
  let prepodData = req.body;

  let newPrepodModel = new prepodModel({
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
  });

  prepodModel.addPrepod(newPrepodModel, (err, prepod) => {
    if (err) res.json({
      succes: false,
      msg: "Prepod not created!!!",
      err: err
    });
    else res.json({
      succes: true,
      msg: "Prepod succes created!!!"
    });
  });
});

// Регистрация студента
router.post("/student", function (req, res, next) {
  let studentData = req.body;
  let newStudentModel = new studentModel({
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
  });

  studentModel.addStudent(newStudentModel, (err, prepod) => {
    if (err) res.json({
      succes: false,
      msg: "Student not created!!!",
      err: err
    });
    else res.json({
      succes: true,
      msg: "Student succes created!!!"
    });
  });
});

module.exports = router;