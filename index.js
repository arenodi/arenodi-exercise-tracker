const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// require mongoose
const mongoose = require("mongoose");
// require body-parser
const bodyParser = require("body-parser");

// connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// reference models
const ExerciseModel = require("./models/exercise.js");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/users", require("./routes/users.js"));

app.post("/api/users/:id/exercises", (req, res) => {
  UserModel.find({ _id: req.params.id })
    .select("username")
    .exec()
    .then((docFound) => {
      if (docFound.length) {
        ExerciseModel.create({
          username: docFound[0].username,
          description: req.body.description,
          duration: parseInt(req.body.duration),
          date: new Date(req.body.date),
        }).then((newDoc) => {
          res.json({
            username: newDoc.username,
            description: newDoc.description,
            duration: newDoc.duration,
            date: newDoc.date.toDateString(),
            _id: req.params.id,
          });
        });
      } else {
        res.json({ error: "user do not exist" });
      }
    });
});

app.get("/api/users/:id/logs", (req, res) => {
  Exercise;
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
