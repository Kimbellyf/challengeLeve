'use strict';

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course-controller');


// get all courses
router.get("/", courseController.getCourses);

// get specific course
router.get("/course_enrollment", courseController.getCourse);

// insert new course
router.post("/", courseController.createCourse);

// update course
router.put("/course_enrollment", courseController.updateCourse);

// delete course
router.delete("/course_enrollment", courseController.deleteCourse);


module.exports = router;