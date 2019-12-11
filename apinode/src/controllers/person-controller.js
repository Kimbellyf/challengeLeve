'use strict';
const Person = require("../models/person");
const Student = require('../models/student')
//const ValidationContract = require('../validators/tra');

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
            .then(person => res.json(person))
            .catch(err => {
                console.log("Error in query (getPerson): " + err);
                res.sendStatus(500);
            });
    }


    createPerson(req, res) {
        const { name, cpf, telephone } = req.body;
        var per=0;
        Person.create({ name, cpf, telephone })
            .then(person => res.json(person))
            .catch(err => {
                console.log("Error in query (createPerson): " + err);
                res.sendStatus(500);
            });

    }
    createStudent(req, res) {
        const {id} = req.body;
        student_enrollment =id;
        //const {student_enrollment,status_on, enr_date } = 
        Student.create({ student_enrollment,status_on:true })
            .then(Student => res.json(Student))
            .catch(err => {
                console.log("Error in query (createStudent): " + err);
                res.sendStatus(500);
            });
    }

    updatePerson(req, res) {
        const { id, name, cpf, telephone } = req.body;
        Person.update({ id,name, cpf, telephone }, { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updatePerson): " + err);
                res.sendStatus(500);
            });
    }
    deletePerson(req,res){
        const { id } = req.query;
        Person.destroy( { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deletePerson): " + err);
                res.sendStatus(500);
            });
    }
    RetiraMascara(ObjCPF) {
        //if(("\" or "/") in ObjCPF){} "\"
        return ObjCPF.value.replace(/\D/g, '');
    }
}

module.exports = new PersonController();
