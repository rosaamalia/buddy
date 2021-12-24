const express = require('express')
const models = require('../models')

const getAllUser = async (req, res, next) => {
    const User = await models.User.findAll({});
    res.status(200).send({
        status: 200,
        message: 'Berhasil get data user',
        data: User
    });
};

const getUserbyEmail = async (val) => await models.User.findOne({ where: {email: val} })

const getRoleUser = async (id) => await models.User.findOne({ attributes: ['role'], where: {id: id} })

module.exports = {
    getAllUser,
    getUserbyEmail,
    getRoleUser
};