const express = require("express");

const router = express.Router();

const imageController = require("./../controllers/imageController");

router.get("/", imageController.getImages);
router.post("/", imageController.uploadImage);

module.exports = router;
