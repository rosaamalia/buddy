const models = require('../models')

const createFavorite = async (req, res) => {
    try {
        const { nama_favorite, sampul_favorite } = req.body;
        const user_id = req.user_id;

        const save = await models.Favorite.create({
            user_id: user_id,
            nama_favorite: nama_favorite,
            sampul_favorite: sampul_favorite
        })

        res.status(200).send({
            status: 200,
            message: "Favorite berhasil dibuat",
            data: {
                id: save.id,
                nama_favorite: save.nama_favorite,
                sampul_favorite: save.sampul_favorite,
                updatedAt: save.updatedAt,
                createdAt: save.createdAt
            }
        })
    } catch(err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Favorite gagal dibuat",
            error: err.message
        })
    }
}

const getFavoritebyId = async (id) => await models.Favorite.findOne({ where: {id: id} })

const addBooks = async (req, res) => {
    try {
        const favorite_id = req.params.id
        const books = req.body.buku
        const data = await getFavoritebyId(favorite_id)
        const favorite = data.dataValues

        if(req.user_id != favorite.user_id)
        {
            res.status(403).send({
                status: 403,
                message: "Kamu tidak memiliki hak untuk mengakses Favorite ini"
            })
        } else {
            const buku = [];

            for(i=0; i<books.length; i++)
            {
                await models.FavoritesBooks.create({
                    favorite_id: favorite_id,
                    buku_id: books[i].id
                })

                const dataBuku = await models.Book.findOne({ where: {id: books[i].id}})

                buku[i] = dataBuku
            }

            res.status(200).send({
                status: 200,
                message: "Buku berhasil ditambahkan",
                data: {
                    id: favorite.id,
                    nama_favorite: favorite.nama_favorite,
                    sampul_favorite: favorite.sampul_favorite,
                    createdAt: favorite.createdAt,
                    updatedAt: favorite.updatedAt,
                    buku: buku
                }
            })
        }

    } catch(err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Buku gagal ditambahkan",
            error: err.message
        })
    }
}

const getUserFavorite = async (req, res) => {
    try {
        const user_id = req.user_id
    
        const favorite = await models.Favorite.findAll({
            where: {user_id: user_id},
            include: [{
                model: models.Book, as: "buku"
            }]
        })
        
        console.log(favorite)
        res.status(200).send({
            status: 200,
            message: "Data favorite user berhasil diambil",
            favorites: favorite
        })
    } catch(err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Data favorite gagal diambil",
            error: err.message
        })
    }
}

const deleteFavorite = async (req, res) => {
    try {
        const favorite_id = req.params.id
        const data = await getFavoritebyId(favorite_id)
        const favorite = data.dataValues

        if(req.user_id != favorite.user_id)
        {
            res.status(403).send({
                status: 403,
                message: "Kamu tidak memiliki hak untuk mengakses Favorite ini"
            })
        } else {
            await models.FavoritesBooks.destroy({ where: {favorite_id: favorite_id}})
            await models.Favorite.destroy({ where: {id: favorite_id}})

            res.status(200).send({
                status: 200,
                message: "Favorite berhasil dihapus"
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Favorite gagal dihapus",
            error: err.message
        })
    }
}

const getAllFavorite = async (req, res) => {
    try {
        const data = await models.Favorite.findAll({
            include: [{
                model: models.Book, as: "buku"
            }]
        })

        res.status(200).send({
            status: 200,
            message: "Data semua favorite berhasil diambil",
            data: data
        })
    } catch(err) {
        console.log(err)
        res.status(500).send({
            status: 500,
            message: "Data gagal diambil",
            error: err.message
        })
    }
}

module.exports = {
    createFavorite,
    addBooks,
    getUserFavorite,
    deleteFavorite,
    getAllFavorite
}