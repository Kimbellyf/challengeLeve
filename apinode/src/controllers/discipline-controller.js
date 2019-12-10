'use strict';


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
        const { Disciplinename } = req.query;
        Discipline.findOne({ where: { Disciplinename } })
            .then(Discipline => res.json(Discipline))
            .catch(err => {
                console.log("Error in query (getDiscipline): " + err);
                res.sendStatus(500);
            });
    }

    createDiscipline(req, res) {
        const { name, birthdate, admin, Disciplinename, email, password } = req.body;
        Discipline.create({ name, birthdate, admin, Disciplinename, email, password })
            .then(Discipline => res.json(Discipline))
            .catch(err => {
                console.log("Error in query (createDiscipline): " + err);
                res.sendStatus(500);
            });
    }

    updateDiscipline(req, res) {
        const { id, name, birthdate, admin, Disciplinename, email, password } = req.body;
        Discipline.update({ name, birthdate, admin, Disciplinename, email, password }, { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateDiscipline): " + err);
                res.sendStatus(500);
            });
    }
    deleteDiscipline(req,res){
        const { id } = req.query;
        Discipline.destroy( { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteDiscipline): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new DisciplineController();
