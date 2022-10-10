const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Raph:raphraph@cluster0.ba9e3ga.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  // Peut etre pas necessaire
  (err) => {
    if (!err) console.log("MongoDb Connected");
    else console.log("Connection error : " + err);
  }
);
