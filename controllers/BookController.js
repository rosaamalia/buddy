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

const addBook = async (req, res) => {
    try {
        const {kategori_id, judul, deskripsi , penulis , sampul, isi} = req.body
        const addBooks = {
            kategori_id : kategori_id,
            judul : judul,
            deskripsi : deskripsi,
            penulis : penulis,
            sampul : sampul,
            isi : isi
        }

        const newbooks = await models.Book.create(addBooks)
        res.status(200).send({
            status: 200,
            message : "success menambahkan data buku",
            data : newbooks
        })
    } catch(error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
}

const updateBook = async (req, res) => {
    try {
        const booksId = req.params.id;

        const {kategori_id, judul, deskripsi , penulis , sampul, isi} = req.body
        const updateBooks = {
            kategori_id : kategori_id,
            judul : judul,
            deskripsi : deskripsi,
            penulis : penulis,
            sampul : sampul,
            isi : isi
        }

        const newupdatebooks = await models.Book.update(updateBooks, {
            where: {
                id : booksId
            }
        })
        res.status(200).send({
            status: 200,
            message : `buku dengan id : ${booksId} berhasil di update`,
            data : newupdatebooks
        })        
    } catch(error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const booksId = req.params.id;
        const deletebooks = await models.Book.destroy({
            where: {
                id : booksId
            }
        })
        res.status(200).send({
            status: 200,
            message : `buku dengan id : ${booksId} berhasil di hapus`,
        })
    } catch(error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
}



module.exports = {
    getAllBook,
    getByID,
    getByCategory,
    addBook,
    updateBook,
    deleteBook
}

