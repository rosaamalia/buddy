const { check } = require('express-validator')
const User = require('../controllers/UserController')

// validasi input saat registrasi
const registerValidation = [
    check('nama').not().isEmpty().withMessage('Nama harus diisi').isLength({ min: 4, max: 254 }),
    check('email').not().isEmpty().withMessage('Email harus diisi').isEmail().custom( val => {
        // mengecek email apakah sudah digunakan
        return User.getUserbyEmail(val).then( user => {
            if(user) {
                return Promise.reject('Email sudah digunakan')
            }
        })
    }),
    check('password').not().isEmpty().withMessage('Password harus diisi').isAlphanumeric()
];

// validasi input saat login
const loginValidation = [
    check('email').not().isEmpty().withMessage('Email harus diisi').isEmail(),
    check('password').not().isEmpty().withMessage('Password harus diisi').isAlphanumeric()
];

module.exports = {
    registerValidation,
    loginValidation
};