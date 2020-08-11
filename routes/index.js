const express = require("express");
const router = express.Router();
const config = require('../config/db');

let univerModel = require("../models/univer");
let scienceModel = require("../models/science");
let specModel = require("../models/spec");
const { response } = require("../app");
let prepodModel = require("../models/prepod");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const regions = await univerModel.find().distinct("region");
  const cities = await univerModel.find().distinct("city");
  const univers = await univerModel.find().distinct("name");
  const sciences = await scienceModel.find().distinct("name");
  const specs = await specModel.find().distinct("name");
  var regionsSort = regions.sort();
  var citiesSort = cities.sort();
  var universSort = univers.sort();

  const prepods = await prepodModel.find({}).populate('idUniver idScience idSpec').sort("name");

  // console.log(prepods);

  res.render("index", {
    title: "Главная",
    prepods: JSON.parse(JSON.stringify(prepods)),
    regions: regionsSort,
    cities: citiesSort,
    univers: universSort,
    sciences,
    specs,
  });
});

module.exports = router;
