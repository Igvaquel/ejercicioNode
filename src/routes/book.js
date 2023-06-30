const express = require('express');
const router = express.Router();

const { bookController } = require("../controllers")

router.post("/", bookController.createBookController);

router.get("/:bookId", bookController.getBookController );

router.get("/", bookController.getAllBooksController );

router.put("/:bookId", bookController.updateBookController);

router.delete("/:bookId", bookController.deleteBookController);


module.exports = router;