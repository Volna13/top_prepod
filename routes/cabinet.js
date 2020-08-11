const express = require("express");
const router = express.Router();
const prepodModel = require("../models/prepod");
const studentModel = require("../models/student");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

let univerModel = require("../models/univer");
let scienceModel = require("../models/science");
let specModel = require("../models/spec");

/* GET users listing. */
router.get("/:id", passport.authenticate('jwt', {
  session: false
}), async function (req, res, next) {
  var prepod = await prepodModel
    .findById(req.params.id)
    .populate("idUniver idScience idSpec");
  prepod = prepod.populate("idUniver idScience idSpec");
  const regions = await univerModel.find().distinct("region");
  const cities = await univerModel.find().distinct("city");
  const univers = await univerModel.find({}, "_id name").sort("name");
  const sciences = await scienceModel.find({}, "_id name");
  const specs = await specModel.find({}, "_id name");
  var regionsSort = regions.sort();
  var citiesSort = cities.sort();

  res.render("cabinet", {
    title: "Мой кабинет",
    prepod: JSON.parse(JSON.stringify(prepod)),
    regions: regionsSort,
    cities: citiesSort,
    univers: JSON.parse(JSON.stringify(univers)),
    sciences: JSON.parse(JSON.stringify(sciences)),
    specs: JSON.parse(JSON.stringify(specs)),
  });
});

router.get("/marks", function (req, res, next) {
  res.render("marks", {
    title: "Мои оценки",
  });
});

module.exports = router;