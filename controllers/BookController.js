const express = require('sequelize')
const models = require('../models/index')


const getAllBook = async (req, res) => {
    try {
        const Book = await models.Book.findAll({})
        res.status(200).send(
            {
                message : "success get all",
                data : Book
            });
        
        
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }

};

const getByID = async (req,res) => {
    try {
        // const id = req.params.id
        const Book = await models.Book.findOne({
            where: {
                id : req.params.id
            }
        }) 
        res.status(200).send({
                message : "success get by id",
                data : Book
            })
        
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
}

const getByCategory = async (req, res) => {
    try {
        const Book = await models.Book.findAll({
            where : {
                kategori_id : req.params.kategori_id
            }
        })
        res.status(200).send({
            message : "success get by category",
            data : Book
        })
    } catch (error){
        res.status(500).send({
            message : error.message
        })

    }
}



module.exports = {getAllBook, getByID, getByCategory}

