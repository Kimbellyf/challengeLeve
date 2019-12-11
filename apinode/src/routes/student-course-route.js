'use strict';

const express = require('express');
const router = express.Router();
const studentCourseController = require('../controllers/student-course-controller');

// get all students of course
router.get("/course_enrollment?:course_enrollment", studentCourseController.getStudentsCourse);

// get specific student
router.get("/student_enrollment?:student_enrollment", studentCourseController.getStudentCourses);

// get specific student and your courses
//router.get("/student/courses/", studentCourseController.getStudent);

// insert new course to student ///errrrrrrrrrrrrrrrrrrrrrrrrrrrrrado
router.post("/idcourse?idcourse", studentCourseController.createStudentCourse);

// update student //errado tbm
router.put("/student_enrollment?student_enrollment", studentCourseController.updateStudentCourse);

// delete student course
router.delete("/student_course_code?student_course_code", studentCourseController.deleteStudentCourse);


module.exports = router;
