'use strict';


class TeacherController {
    getTeachers(req, res) {
        Teacher.findAll()
            .then(teachers => res.json(teachers))
            .catch(err => {
                console.log("Error in query (getTeachers): " + err);
                res.sendStatus(500);
            });
    }

    getTeacher(req, res) {
        const { teacher_enrollment } = req.query;
        Teacher.findOne({ where: { teacher_enrollment } })
            .then(teacher => res.json(teacher))
            .catch(err => {
                console.log("Error in query (getTeacher): " + err);
                res.sendStatus(500);
            });
    }

    createTeacher(req, res) {
        const { teacher_enrollment, admission_date } = req.body;
        Teacher.create({ teacher_enrollment, admission_date })
            .then(user => res.json(teacher))
            .catch(err => {
                console.log("Error in query (createTeacher): " + err);
                res.sendStatus(500);
            });
    }

    updateTeacher(req, res) {
        const { teacher_enrollment, admission_date } = req.body;
        Teacher.update({ teacher_enrollment, admission_date }, { where: { teacher_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateTeacher): " + err);
                res.sendStatus(500);
            });
    }
    deleteTeacher(req,res){
        const { teacher_enrollment } = req.query;
        Teacher.destroy( { where: { teacher_enrollment} })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteTeacher): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new TeacherController();
