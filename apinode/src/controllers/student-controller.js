'use strict';
const Student = require("../models/student");

class StudentController {
    getStudents(req, res) {
        Student.findAll()
            .then(student => res.json(student))
            .catch(err => {
                console.log("Error in query (getStudent): " + err);
                res.sendStatus(500);
            });
    }

    getStudent(req, res) {
        const { student_enrollment } = req.query;
        Student.findOne({ where: { student_enrollment } })
            .then(student => res.json(student))
            .catch(err => {
                console.log("Error in query (getStudent): " + err);
                res.sendStatus(500);
            });
    }

    createStudent(req, res) {
        const {student_enrollment,status_on, enr_date } = req.body;
        Student.create({ student_enrollment,status_on, enr_date })
            .then(Student => res.json(Student))
            .catch(err => {
                console.log("Error in query (createStudent): " + err);
                res.sendStatus(500);
            });
    }

    updateStudent(req, res) {
        const { student_enrollment, status_on, enr_date } = req.body;
        Student.update({ student_enrollment, status_on, enr_date}, { where: { student_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateStudent): " + err);
                res.sendStatus(500);
            });
    }
    deleteStudent(req,res){
        const { student_enrollment} = req.query;
        Student.destroy( { where: { student_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteStudent): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new StudentController();
