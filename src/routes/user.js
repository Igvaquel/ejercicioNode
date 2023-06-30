const express = require('express');
const router = express.Router();

const {userController} = require("../controllers");

router.post("/", userController.createUserController );

router.get("/:userId", userController.getUserController);

router.get("/:userId", userController.getUserController);

router.put("/:userId", userController.updateUserController);


module.exports = router;


