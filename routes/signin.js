const express = require("express");
const router = express.Router();
const prepodModel = require("../models/prepod");
const studentModel = require("../models/student");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/db");

router.get("/", function (req, res, next) {
  res.render("signin", {
    title: "Авторизация",
  });
});

// router.get('/', function (req, res, next) {
//   if (req.session.prepod) {
//     var data = {
//       title: 'Авторизация',
//       prepod: req.session.prepod 
//     }
//     res.render('signin', data);
//   } else {
//     var data = {
//       title: 'errorr',
//     }
//     res.render('index', data);
//   }
// });

/////////////////////////////////////////////////////////////////LOGIN
router.post("/prepod", function (req, res, next) {
  const email = req.body.prepodInputEmail;
  const password = req.body.prepodInputPassword;

  
  prepodModel.getPrepodByEmail(email, (err, prepod) => {
    if (err) throw err;
    if (!prepod)
      return res.json({
        succes: false,
        msg: "Такого email не существует в базе",
        err: err,
      });

    prepodModel.comparePass(password, prepod.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {

        const token = jwt.sign({prepod}, config.secret, {
          expiresIn: 3600 * 24,
        });

        res.json({
          succes: true,
          token: "JWT" + token,
          msg: "Вы авторизованы",
          prepod: {
            id: prepod._id,
            email: prepod.email,
            name: prepod.name,
          },
        });
      } else
        return res.json({
          succes: false,
          msg: "Пароли не совпадают",
          err: err,
        });
    });
  });
});

module.exports = router;