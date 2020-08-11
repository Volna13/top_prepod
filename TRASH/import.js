const csv = require("csv-parser");
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/top_prepod", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let scienceModel = require("./models/science");

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (data) => {
    console.log(data);

    let model = new scienceModel({
      name: data.name,
      idscience: data.idscience,
      active: data.active,
    });

    model
      .save()
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.error(err);
      });

    // results.push(data)
  } )
  .on("end", () => {
    console.log("finish");
  });
