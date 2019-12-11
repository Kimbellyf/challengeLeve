'use strict';
const Discipline = require("../models/discipline");

class DisciplineController {
    getDisciplines(req, res) {
        Discipline.findAll()
            .then(disciplines => res.json(disciplines))
            .catch(err => {
                console.log("Error in query (getDisciplines): " + err);
                res.sendStatus(500);
            });
    }

    getDiscipline(req, res) {
        const { disc_code} = req.query;
        Discipline.findOne({ where: { disc_code } })
            .then(Discipline => res.json(Discipline))
            .catch(err => {
                console.log("Error in query (getDiscipline): " + err);
                res.sendStatus(500);
            });
    }

    createDiscipline(req, res) {
        const { content ,teacher_enrollment } = req.body;
        Discipline.create({ content ,teacher_enrollment })
            .then(Discipline => res.json(Discipline))
            .catch(err => {
                console.log("Error in query (createDiscipline): " + err);
                res.sendStatus(500);
            });
    }

    updateDiscipline(req, res) {
        const { disc_code,content ,teacher_enrollment } = req.body;
        Discipline.update({ disc_code,content ,teacher_enrollment }, { where: { disc_code } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateDiscipline): " + err);
                res.sendStatus(500);
            });
    }
    deleteDiscipline(req,res){
        const { disc_code } = req.query;
        Discipline.destroy( { where: { disc_code } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteDiscipline): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new DisciplineController();
