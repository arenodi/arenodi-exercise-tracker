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

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/users", require("./routes/users.js"));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
