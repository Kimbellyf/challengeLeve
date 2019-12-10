'use strict';

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher-controller');


// get all teachers
router.get("/teacher", teacherController.getTeachers);

// get specific teacher
router.get("/teacher/username?:username", teacherController.getTeacher);

// insert new teacher
router.post("/teacher", teacherController.createTeacher);

// update teacher
router.put("/teacher", teacherController.updateTeacher);

// delete teacher
router.delete("/teacher", teacherController.deleteTeacher);


module.exports = router;