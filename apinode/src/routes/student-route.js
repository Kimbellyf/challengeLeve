'use strict';

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student-controller');


// get all students
router.get("/", studentController.getStudents);

// get specific student
router.get("/student_enrollment?:student_enrollment", studentController.getStudent);

// get specific student and your courses
//router.get("/student/courses/", studentController.getStudent);

// insert new student
router.post("/", studentController.createStudent);

// update student
router.put("/student_enrollment?:student_enrollment", studentController.updateStudent);

// delete student
router.delete("/student_enrollment", studentController.deleteStudent);


module.exports = router;
