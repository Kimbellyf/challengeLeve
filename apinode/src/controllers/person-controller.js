'use strict';


class PersonController {
    getPeople(req, res) {
        Person.findAll()
            .then(person => res.json(person))
            .catch(err => {
                console.log("Error in query (getPeople): " + err);
                res.sendStatus(500);
            });
    }

    getPerson(req, res) {
        const { cpf } = req.query;
        Person.findOne({ where: { cpf } })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (getPerson): " + err);
                res.sendStatus(500);
            });
    }

    createPerson(req, res) {
        const { name, cpf, telephone } = req.body;
        User.create({ name, cpf, telephone })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (createPerson): " + err);
                res.sendStatus(500);
            });
    }

    updatePerson(req, res) {
        const { id, name, cpf, telephone } = req.body;
        User.update({ id,name, cpf, telephone }, { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updatePerson): " + err);
                res.sendStatus(500);
            });
    }
    deletePerson(req,res){
        const { id } = req.query;
        User.destroy( { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deletePerson): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new PersonController();
