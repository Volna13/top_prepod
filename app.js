const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressHbs = require("express-handlebars");
const config = require('./config/db');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const session = require("express-session");



var indexRouter = require("./routes/index");
var signUpRouter = require("./routes/signup");
var signInRouter = require("./routes/signin");
var usersRouter = require("./routes/users");
var aboutRouter = require("./routes/about");
var cabinetRouter = require("./routes/cabinet");
var preppageRouter = require("./routes/preppage");

const app = express();

// view engine setup
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  })
);

// app.engine("handlebars", exphbs());
app.set("view engine", "hbs");

//passport setup
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// DB setup
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('DB connect succes!!!!!!!!!!!!!!!!!');
});

mongoose.connection.on('error', (err) => {
  console.log('DB connect ERROR: ' + err);
});

// app.use(bodyParcer.json());

app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/signup", signUpRouter);
app.use("/signin", signInRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/cabinet", cabinetRouter);
app.use("/preppage", preppageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;