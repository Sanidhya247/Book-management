const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Book = require("../Schema/Book");

router.get("/getbooks", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    console.error(error);
  }
});

router.post(
  "/addbook",
  [body("name").isLength({ min: 5 }), body("authorname").isLength({ min: 3 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, authorname, booktype } = req.body;
      const book = new Book({ name, authorname, booktype });
      const savedBook = await book.save();
      res.send(savedBook);
    } catch (error) {
      console.error(error);
    }
  }
);

router.put(
  "/updatebook/:id",
  [body("name").isLength({ min: 5 }), body("authorname").isLength({ min: 3 })],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // const { name, authorname, booktype } = req.body;
      const updateBook = req.body;
      const id = req.params.id;
      const data = await Book.findByIdAndUpdate(
        id,
        { $set: updateBook },
        { new: true }
      );
      const Data = await Book.findById(id);
      res.send(Data);
    } catch (error) {
      console.error(error);
    }
  }
);

router.delete("/deletebook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book.findByIdAndDelete(id);
    let books = await Book.find();
    if (!books) {
      res.send({ message: "no books found add book to display" });
    } else {
      res.send(books);
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
