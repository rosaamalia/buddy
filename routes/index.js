const express = require('express')
const router = express.Router();
const user = require('./user');
const auth = require('./auth');
const favorite = require('./favorite');
const book = require('./book')

router.get("/", (req, res) => {
    res.send("Selamat datang di Buddy");
})

router.use('/auth', auth);
router.use('/user', user);
router.use('/favorites', favorite);
router.use('/books',book)

module.exports = router;