const express = require('express');
const router = express.Router();

const {libraryController} = require("../controllers");
const { jwtValidMDW, userIsAdminMDW} = require("../middleware/auth-mdw");


router.post("/",userIsAdminMDW ,libraryController.createLibraryController);

router.get("/:libraryId", jwtValidMDW,libraryController.getLibraryController );

router.get("/",jwtValidMDW ,libraryController.getAllLibrarysController );

router.put("/:libraryId",userIsAdminMDW ,libraryController.updateLibraryController );


router.delete("/:libraryId",userIsAdminMDW ,libraryController.deleteLibraryController );


module.exports = router;