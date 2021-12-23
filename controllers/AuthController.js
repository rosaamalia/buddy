const models = require('../models')
const jwt = require('jsonwebtoken')
const passwordHash = require('password-hash')
require("dotenv").config()

const register = async (req, res) => {
    try {
        const save = await models.User.create(req)
        res.status(200).send({
            status: 200,
            message: "Berhasil melakukan register"
        })
    } catch(err) {
        res.status(422).send({
            status: 422,
            message: err
        })
    }
}

const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const cekEmail = await models.User.findOne({
            where: {email: email}
        })
        
        const user = cekEmail.dataValues
        const verify = passwordHash.verify(password, user.password)
        
        if(verify == true)
        {
            const userToken = {
                id: user.id,
                email: user.email
            }

            const token = jwt.sign({ userToken }, process.env.TOKEN_SECRET, {
                expiresIn: '24h' // token akan expired setelah 24 jam
            })

            res.status(200).send({
                status: 200,
                message: "Login berhasil",
                token: token
            })
        } else {
            res.status(422).send({
                status: 422,
                message: "Password salah"
            })
        }
    } catch(err) {
        console.log(err)
        res.status(422).send({
            status: 422,
            message: "Email atau password salah",
            error: err
        })
    }
}

module.exports = {
    register,
    login
}