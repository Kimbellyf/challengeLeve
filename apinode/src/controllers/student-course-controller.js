'use strict';
const Student_Course = require("../models/student-course");

class StudentCourseController {
    //const {}
    getStudentsCourse(req, res) {
        const { course_enrollment } = req.query;
        Student_Course.findAll({ where: { course_enrollment} })
            .then(courses => res.json(courses))
            .catch(err => {
                console.log("Error in query (getStudentsCourses): " + err);
                res.sendStatus(500);
            });
    }
    getStudentCourses(req, res) {
        const { student_enrollment } = req.query;
        Student_course.findAll({ where: { student_enrollment } })
            .then(student_course => res.json(student_course))
            .catch(err => {
                console.log("Error in query (getStudentCourse): " + err);
                res.sendStatus(500);
            });
    }

    createStudentCourse(req, res) {
        const {course_enrollment,student_enrollment } = req.body;
        Student_course.create({ course_enrollment,student_enrollment})
            .then(Student_course => res.json(Student_course))
            .catch(err => {
                console.log("Error in query (createStudentCourse): " + err);
                res.sendStatus(500);
            });
    }

    updateStudentCourse(req, res) {
        const { student_course_code,course_enrollment,student_enrollment} = req.body;
        Student_course.update({ student_course_code,course_enrollment,student_enrollment }, { where: { student_course_code} })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateStudentCourse): " + err);
                res.sendStatus(500);
            });
    }
    deleteStudentCourse(req,res){
        const { student_course_code} = req.query;
        Student_course.destroy( { where: { student_course_code } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteStudentCourse): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new StudentCourseController();
