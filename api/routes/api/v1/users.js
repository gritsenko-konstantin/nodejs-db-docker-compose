'use strict';

const usersController = require('../../../controllers/v1/users');
const router = require('express').Router();

router.get('/', usersController.getAll.bind(usersController));
router.post('/', usersController.create.bind(usersController));

module.exports = router;
