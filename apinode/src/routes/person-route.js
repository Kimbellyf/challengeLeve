'use strict';

const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');


// get all people
router.get("/", personController.getPeople);


// get specific person
router.get("/cpf/", personController.getPerson);

// insert new person
router.post("/", personController.createPerson);

// update person
router.put("/id", personController.updatePerson);

// delete person
router.delete("/id", personController.deletePerson);


module.exports = router;