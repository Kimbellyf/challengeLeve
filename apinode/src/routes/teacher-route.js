'use strict';

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher-controller');


// get all teachers
router.get("/", teacherController.getTeachers);

// get specific teacher
router.get("/teacher_enrollment?:teacher_enrollment", teacherController.getTeacher);

// insert new teacher
router.post("/", teacherController.createTeacher);

// update teacher
router.put("/teacher_enrollment?:teacher_enrollment", teacherController.updateTeacher);

// delete teacher
router.delete("/teacherteacher_enrollment?:teacher_enrollment", teacherController.deleteTeacher);


module.exports = router;