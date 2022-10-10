//bodyParser = JSON.parse // Sert à interpreter les données JSON
//INDISPENSABLE
const bodyParser = require("body-parser");
const express = require("express");
require("./models/dbConfig");
const app = express();
const postRoutes = require("./routes/postsController");
const cors = require("cors");

app.use(bodyParser.json());
//Important pour éviter les pb de CORS
//On peut mettre en paramettre
//Ex : cors({origin : "https://mon-site.fr"})
app.use(cors());
app.use("/", postRoutes);

app.listen(3000, () => {
  console.log("Server started: 3000");
});
