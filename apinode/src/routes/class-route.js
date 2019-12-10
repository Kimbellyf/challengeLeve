'use strict';

const express = require('express');
const router = express.Router();
const classController = require('../controllers/class-controller');


// get all classes
router.get("/class", classController.getClasses);

// get specific class
//router.get("/class/username?:username", classController.getclass);

// insert new class
router.post("/class", classController.createClass);

// update class
router.put("/class", classController.updateClass);

// delete class
router.delete("/class", classController.deleteClass);


module.exports = router;