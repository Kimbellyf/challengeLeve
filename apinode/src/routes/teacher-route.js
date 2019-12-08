'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacher-controller');

router.post('/',controller.post);
router.get('/', controller.get);
router.put('/:id',controller.put);
router.del('/',controller.del);


module.exports = Router;