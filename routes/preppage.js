let express = require("express");
let router = express.Router();

let prepodModel = require("../models/prepod");

router.get("/:id", async function (req, res, next) {

  var prepod = await prepodModel.findById(req.params.id).populate('idUniver idScience idSpec');
  prepod = prepod.populate('idUniver idScience idSpec');

  console.log(prepod);
  res.render("preppage", {
    id: req.params.id,
    title: "Страница преподавателя",
    prepod: JSON.parse(JSON.stringify(prepod)),

  });
});

module.exports = router;