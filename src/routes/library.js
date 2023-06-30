const express = require('express');
const router = express.Router();

const {libraryController} = require("../controllers")


router.post("/", libraryController.createLibraryController);

router.get("/:libraryId", libraryController.getLibraryController );

router.get("/", libraryController.getAllLibrarysController );

router.put("/:libraryId/library", libraryController.getLibraryController );


router.delete("/:libraryId", libraryController.deleteLibraryController );


module.exports = router;