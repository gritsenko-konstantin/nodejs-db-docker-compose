'use strict';

const usersController = require('../../../controllers/v2/users');
const router = require('express').Router();

router.get('/', usersController.getAll.bind(usersController));

module.exports = router;
