const express = require('express');
const router = express.Router();

const controllers = require('./controllers')

router.get('/', controllers.getAll);
router.get('/:id', controllers.getById);

module.exports = router;
