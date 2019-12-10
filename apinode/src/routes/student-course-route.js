'use strict';

const express = require('express');
const router = express.Router();
const studentCourseController = require('../controllers/student-course-controller');

// get all students of course
router.get("/student/courses/course_enrollment?:course_enrollment", studentCourseController.getStudentsCourse);

// get specific student
router.get("/student/courses/student_enrollment?:student_enrollment", studentCourseController.getStudentCourses);

// get specific student and your courses
//router.get("/student/courses/", studentCourseController.getStudent);

// insert new course to student ///errrrrrrrrrrrrrrrrrrrrrrrrrrrrrado
router.post("/student/courses/idcourse?idcourse", studentCourseController.createStudentCourse);

// update student //errado tbm
router.put("/student/course/student_enrollment?student_enrollment", studentCourseController.updateStudentCourse);

// delete student course
router.delete("/student/courses/student_course_code?student_course_code", studentCourseController.deleteStudent);


module.exports = router;
