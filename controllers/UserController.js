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

module.exports = { getAllUser };