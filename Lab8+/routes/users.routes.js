const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/login', usersController.get_login);

module.exports = router;