'use strict';


class StudentCourseController {
    //const {}
    getStudentsCourse(req, res) {
        const { course_enrollment } = req.query;
        StudentCourse.findAll({ where: { course_enrollment} })
            .then(courses => res.json(courses))
            .catch(err => {
                console.log("Error in query (getStudentsCourses): " + err);
                res.sendStatus(500);
            });
    }
    getStudentCourses(req, res) {
        const { student_enrollment } = req.query;
        Course_student.findAll({ where: { student_enrollment } })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (getStudentCourse): " + err);
                res.sendStatus(500);
            });
    }

    createStudentCourse(req, res) {
        const {course_enrollment,student_enrollment } = req.body;
        Course_student.create({ course_enrollment,student_enrollment})
            .then(Course_student => res.json(Course_student))
            .catch(err => {
                console.log("Error in query (createStudentCourse): " + err);
                res.sendStatus(500);
            });
    }

    updateStudentCourse(req, res) {
        const { student_course_code,course_enrollment,student_enrollment} = req.body;
        Course_student.update({ student_course_code,course_enrollment,student_enrollment }, { where: { student_course_code} })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateStudentCourse): " + err);
                res.sendStatus(500);
            });
    }
    deleteStudentCourse(req,res){
        const { student_course_code} = req.query;
        Course_student.destroy( { where: { student_course_code } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteStudentCourse): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new StudentCourseController();
