const express = require('express')
const { validationResult } = require('express-validator')
const passwordHash = require('password-hash') 
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const { registerValidation, loginValidation } = require('../middlewares/auth')

// route register
router.post('/register', registerValidation, (req, res) => {
    // mengecek ke middleware, apakah validasi terpenuhi
    const error = validationResult(req);

    if(error.isEmpty())
    {
        // password yang akan disimpan, di-hash terlebih dahulu
        const password = passwordHash.generate(req.body.password);
        data = {
            nama: req.body.nama,
            email: req.body.email,
            password: password,
            role: req.body.role
        };

        AuthController.register(data, res)
    } else {
        res.status(422).send({
            status: 422,
            message: error
        })
    }
})

// route login
router.post('/login', loginValidation, (req, res) => {
    // mengecek ke middleware, apakah validasi terpenuhi
    const error = validationResult(req);

    if(error.isEmpty())
    {
        AuthController.login(req, res)
    } else {
        res.status(422).send({
            status: 422,
            message: error
        })
    }
})

// route logout
router.post('/logout', AuthController.logout)

module.exports = router;