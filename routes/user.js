const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUser);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;