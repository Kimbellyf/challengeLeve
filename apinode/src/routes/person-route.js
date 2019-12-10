'use strict';

const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');


// get all people
router.get("/person", personController.getPeople);

// get specific person
router.get("/person/username?:username", personController.getPerson);

// insert new person
router.post("/person", personController.createPerson);

// update person
router.put("/person", personController.updatePerson);

// delete person
router.delete("/person", personController.deletePerson);


module.exports = router;