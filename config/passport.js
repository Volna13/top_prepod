const config = require("./db");
const prepodModel = require("../models/prepod.js");

// var JwtStrategy = require("passport-jwt").Strategy,
// ExtractJwt = require("passport-jwt").ExtractJwt;

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new CookieStrategy(
      {
        cookieName: "token",
        signed: false,
        passReqToCallback: false,
      },
      function (req, token, done) {
        prepodModel.findByToken({ token: token }, function (err, prepod) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          return done(null, prepod);
        });
      }
    )
  );
};
