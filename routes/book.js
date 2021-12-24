const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')


router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getByID)
router.get('/category/:kategori_id', BookController.getByCategory)

router.post('/', BookController.addBook)
router.put('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)

module.exports = router;