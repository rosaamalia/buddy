const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')
const { authenticateJWT, roleValidation } = require('../middlewares/auth')

router.get('/', authenticateJWT, BookController.getAllBook)
router.get('/:id', authenticateJWT, BookController.getByID)
router.get('/category/:kategori_id', authenticateJWT, BookController.getByCategory)

router.post('/', authenticateJWT, roleValidation('admin'), BookController.addBook)
router.put('/:id', authenticateJWT, roleValidation('admin'), BookController.updateBook)
router.delete('/:id', authenticateJWT, roleValidation('admin'), BookController.deleteBook)

module.exports = router;