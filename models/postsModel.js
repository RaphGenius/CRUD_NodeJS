const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "test",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "test"
);

module.exports = { PostsModel };
