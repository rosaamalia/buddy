const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')


router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getByID)
router.get('/category/:kategori_id', BookController.getByCategory)

module.exports = router;