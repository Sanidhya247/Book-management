const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  booktype: {
    type: String,
    default: "knowledgable",
  },
  date:{
    type:Date,
    default:Date.now
  }
});

const Book = mongoose.model('Book' , bookSchema);
module.exports = Book; 