
const express = require('express');
const router = express.Router();
const ministerController = require('../controllers/minister-controller');

router.post('/',ministerController.post);
router.get('/', ministerController.get);
router.put('/:id',ministerController.put);
router.del('/',ministerController.del);


module.exports = router;