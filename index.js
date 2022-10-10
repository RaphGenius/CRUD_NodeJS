const express = require("express");
const app = express();
require("./models/dbConfig");
const postRoutes = require("./routes/postsController");

app.use("/", postRoutes);

app.listen(3000, () => {
  console.log("Server started: 3000");
});
