//import modules
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const db = require("./models/index")
const models = require('./models')
const sequelize= require("sequelize");
const Op = sequelize.Op;


//inisiasi app
const app = express()
const port = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json())

// Middleware
const authenticateJWT = (req, res, next) => {
    // menangkap request client dengan authorizationnya (token)
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // mengambil token saja
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//routes
//test
app.get("/", (req,res)=>{
    console.log("server is ready")
    res.send("server is ready")
})

// app.get("/books", authenticateJWT, async function(req, res) {
//     try {
//         const Book = await models.Book.findAll({})
//         res.status(200).send(
//             {
//                 status: 200,
//                 message : "success get all",
//                 data : Book
//             });
        
        
//     } catch (error) {
//         res.status(500).send({
//             status: 500,
//             message : error.message
//         })
//     }
// });

app.post("/books", authenticateJWT, async function (req, res){
    try {
        // const user = req.user
        const verif = await models.newuser.findOne({
            where : {
                role : "admin"
            }
        })

        // const verif2 = await models.newuser.findOne({ where:{
        //     [Op.and]: [{roles}, {role : "admin"}]
        // } })

        const {role} = req.user;
        console.log(req.user);
        // console.log(req.user)

        console.log(verif)
        // console.log(verif2)
    
        const {kategori_id, judul, deskripsi , penulis , sampul, isi} = req.body
        const addBooks = {
            kategori_id : kategori_id,
            judul : judul,
            deskripsi : deskripsi,
            penulis : penulis,
            sampul : sampul,
            isi : isi
        }

        if (role !== "admin" && verif==false) {
            return res.sendStatus(403);
        }

        const newbooks = await models.Book.create(addBooks)
        res.status(200).send({
            status: 200,
            message : "success menambahkan data buku",
            data : addBooks
        })
        
    } catch (error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
});

app.put("/books/:id", authenticateJWT, async function (req, res){
    try {
        // const user = req.user
        const verif = await models.newuser.findOne({
            where : {
                role : "admin"
            }
        })

        const booksId = req.params.id;

        // const verif2 = await models.newuser.findOne({ where:{
        //     [Op.and]: [{roles}, {role : "admin"}]
        // } })

        const {role} = req.user;
        console.log(req.user);
        // console.log(req.user)

        console.log(verif)
        // console.log(verif2)
    
        const {kategori_id, judul, deskripsi , penulis , sampul, isi} = req.body
        const updateBooks = {
            kategori_id : kategori_id,
            judul : judul,
            deskripsi : deskripsi,
            penulis : penulis,
            sampul : sampul,
            isi : isi
        }

        if (role !== "admin" && verif==false) {
            return res.sendStatus(403);
        }

        const newupdatebooks = await models.Book.update(updateBooks, {
            where: {
                id : booksId
            }
        })
        res.status(200).send({
            status: 200,
            message : `buku dengan id : ${booksId} berhasil di update`,
            data : updateBooks
        })
        
    } catch (error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
});

app.delete("/books/:id", authenticateJWT, async function (req, res){
    try {
        // const user = req.user
        const verif = await models.newuser.findOne({
            where : {
                role : "admin"
            }
        })

        const booksId = req.params.id;

        // const verif2 = await models.newuser.findOne({ where:{
        //     [Op.and]: [{roles}, {role : "admin"}]
        // } })

        const {role} = req.user;
        console.log(req.user);
        // console.log(req.user)

        console.log(verif)
        // console.log(verif2)
    
        // const {kategori_id, judul, deskripsi , penulis , sampul, isi} = req.body
        // const updateBooks = {
        //     kategori_id : kategori_id,
        //     judul : judul,
        //     deskripsi : deskripsi,
        //     penulis : penulis,
        //     sampul : sampul,
        //     isi : isi
        // }

        if (role !== "admin" && verif==false) {
            return res.sendStatus(403);
        }

        const deletebooks = await models.Book.destroy({
            where: {
                id : booksId
            }
        })
        res.status(200).send({
            status: 200,
            message : `buku dengan id : ${booksId} berhasil di hapus`,
        })
        
    } catch (error) {
        res.status(500).send({
            status: 500,
            message : error.message
        })
    }
});

app.get("/users/:id",async function(req, res) {

    try {
        // const {user} = req.user;

        const userId = req.params.id

        // if (user !== userId) {
        //     return res.sendStatus(403);
        // }

        const users = await models.newuser.findOne({
            where: {
                id : userId
            }
        }) 
        res.status(200).send({
                status : 200,
                message : `success get profile user dengan id : ${userId}`,
                data : users
            })
        
    } catch (error) {
        res.status(500).send({
            status : 500,
            message : error.message
        })
    }
       
});



app.listen(port, ()=>{
    console.log("server is listening on port", port)
})

// {
//     "kategori_id" : 2,
//     "Judul" : "Pantun Nasehat",
//     "deskripsi" : "Rusa lari ke padang datar ... ",
//     "penulis" : "anonim",
//     "sampul" : "http://grahailmu.id/wp-content/uploads/2018/04/Pantun.jpg".
//     "isi" : "Rusa lari ke padang datar \n Harimau datang tuk mengejar \n jika ingin tambah pintar \n tentu kita harus belajar"
// }