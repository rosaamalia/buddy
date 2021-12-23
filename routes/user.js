const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authenticateJWT } = require('../middlewares/auth')

router.get('/', authenticateJWT, UserController.getAllUser);

module.exports = router;