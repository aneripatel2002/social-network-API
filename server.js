const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

//mongoose.connect(
// process.env.MONGODB_URI || "mongodb://localhost/social-network-api",
//  {
//  useFindAndModify: false,
//useNewUrlParser: true,
//useCreateIndex: true,
//useUnifiedTopology: true,
//}
//);
//
//mongoose.set("debug", true);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
