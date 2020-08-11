var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("cabinet", { title: "Мой кабинет" });
});

module.exports = router;
