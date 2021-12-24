const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authenticateJWT, roleValidation } = require('../middlewares/auth')

router.get('/', authenticateJWT, roleValidation('admin'), UserController.getAllUser);

module.exports = router;