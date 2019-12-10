'use strict';

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course-controller');


// get all courses
router.get("/course", courseController.getCourses);

// get specific course
//router.get("/course/username?:username", courseController.getCourse);

// insert new course
router.post("/course", courseController.createCourse);

// update course
router.put("/course", courseController.updatecourse);

// delete course
router.delete("/course", courseController.deletecourse);


module.exports = router;