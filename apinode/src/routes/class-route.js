'use strict';

const express = require('express');
const router = express.Router();
const classController = require('../controllers/class-controller');


// get all classes
router.get("/", classController.getClasses);

// get specific class
router.get("/class_code?:class_code", classController.getclass);

// insert new class
router.post("/", classController.createClass);

// update class
router.put("/class_code?:class_code", classController.updateClass);

// delete class
router.delete("/class_code?:class_code", classController.deleteClass);


module.exports = router;