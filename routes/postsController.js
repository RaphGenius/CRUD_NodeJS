const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { PostsModel } = require("../models/postsModel");

//Recuperer les données
router.get("/posts", (req, res) => {
  PostsModel.find((err, docs) => {
    console.log(docs);
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});
// Recupérer une données
router.get("/posts/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);
  PostsModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(err);
  });
});
//Envoyer les données
router.post("/posts", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  console.log(req.body);
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new data" + err);
  });
});

//Modifier une donée
router.put("/:id", (req, res) => {
  // .isValid permet de vérifier si l'id est dans la Db
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(`Update erreur : ${err}`);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);
  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log(`Delete error : ${err}`);
  });
});
module.exports = router;
