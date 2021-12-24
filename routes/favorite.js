const express = require('express');
const router = express.Router();
const FavoriteController = require('../controllers/FavoriteController')
const { authenticateJWT, roleValidation } = require('../middlewares/auth')

// router menambahkan favorite
router.post('/', authenticateJWT, roleValidation('user'), FavoriteController.createFavorite)

// router menambahkan buku
router.post('/:id', authenticateJWT, roleValidation('user'), FavoriteController.addBooks)

// router mendapatkan favorite user yang login
router.get('/', authenticateJWT, roleValidation('user'), FavoriteController.getUserFavorite)

// router delete favorite
router.delete('/:id', authenticateJWT, roleValidation('user'), FavoriteController.deleteFavorite)

// router get all favorite
router.get('/all', authenticateJWT, roleValidation('admin'), FavoriteController.getAllFavorite)

module.exports = router;