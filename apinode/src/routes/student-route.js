'use strict';

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student-controller');


// get all students
router.get("/student", studentController.getStudents);

// get specific student
router.get("/student/username?:username", studentController.getStudent);

// get specific student and your courses
//router.get("/student/courses/", studentController.getStudent);

// insert new student
router.post("/student", studentController.createStudent);

// update student
router.put("/student", studentController.updateStudent);

// delete student
router.delete("/student", studentController.deleteStudent);


module.exports = router;
