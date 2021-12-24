const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authenticateJWT, roleValidation } = require('../middlewares/auth')

router.get('/', authenticateJWT, roleValidation('admin'), UserController.getAllUser);
router.delete('/:id', authenticateJWT, roleValidation('admin'), UserController.deleteUser);

router.get('/profile', authenticateJWT, roleValidation('user'), UserController.getProfileInformation)

module.exports = router;