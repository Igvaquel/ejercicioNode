const express = require('express');
const router = express.Router();

const { bookController } = require("../controllers");
const { jwtValidMDW, userIsAdminMDW} = require("../middleware/auth-mdw");


router.post("/", userIsAdminMDW ,bookController.createBookController);

router.get("/:bookId",jwtValidMDW ,bookController.getBookController );

router.get("/",jwtValidMDW ,bookController.getAllBooksController );

router.put("/:bookId", userIsAdminMDW ,bookController.updateBookController);

router.delete("/:bookId",  userIsAdminMDW ,bookController.deleteBookController);


module.exports = router;