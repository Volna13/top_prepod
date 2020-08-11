var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("about", { title: "Про нас" });
});

router.get("/feedBack", function (req, res, next) {
  res.render("feedBack", { title: "Оставить отзыв" });
});

module.exports = router;
