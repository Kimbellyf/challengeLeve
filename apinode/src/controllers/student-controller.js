'use strict';


class StudentController {
    getStudent(req, res) {
        Student.findAll()
            .then(student => res.json(student))
            .catch(err => {
                console.log("Error in query (getStudent): " + err);
                res.sendStatus(500);
            });
    }

    getStudent(req, res) {
        const { student_enrollment } = req.query;
        User.findOne({ where: { student_enrollment } })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (getStudent): " + err);
                res.sendStatus(500);
            });
    }

    createStudent(req, res) {
        const { student_enrollment, status_on, enr_date } = req.body;
        User.create({ student_enrollment, status_on, enr_date })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (createStudent): " + err);
                res.sendStatus(500);
            });
    }

    updateStudent(req, res) {
        const { student_enrollment, status_on, enr_date } = req.body;
        User.update({ student_enrollment, status_on, enr_date}, { where: { student_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateStudent): " + err);
                res.sendStatus(500);
            });
    }
    deleteStudent(req,res){
        const { student_enrollment} = req.query;
        User.destroy( { where: { student_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteStudent): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new StudentController();
