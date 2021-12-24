const express = require('express')
const models = require('../models/index')

const getAllUser = async (req, res) => {
    const User = await models.User.findAll({});
    res.status(200).send({
        status: 200,
        message: 'Berhasil GET data user',
        data: User
    });
};
const createUser = async (req, res) => {
    try {
        const { nama, email, password } = req.body;
        const User = await models.User.create({
            nama,
            email,
            password
        });

        res.status(200).send({ status: 200, message: 'User Berhasil ditambahkan', data: User });
    } catch (error) {
        res.status(500).send({ status: 500, message:error.message });
        
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { nama, email, password} = req.body;
        const User = await models.User.update(
            {
                nama,
                email,
                password
            },
            {
                where: {
                    id: id
                }
            }
        );

        res.status(200).send({ status: 200, message: "User Berhasil di Update", data: User});
    } catch (error) {
        res.status(500).send({ status: 500, message:error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await models.User.destroy({
            where: {
                id: id
            }
        });

        res.status(200).send({ status: 200, message: "User berhasil di hapus"})
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message});
    }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };