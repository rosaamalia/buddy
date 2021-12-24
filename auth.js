//import module
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const db = require("./models/index")
const models = require('./models');
const sequelize= require("sequelize")
const Op = sequelize.Op;

const app = express()
const port = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json())

// const users = [
//     {
//         email : "Buddy@mail.com",
//         password : "buddy"
//     },
//     {
//         email : "Bobo@mail.com",
//         password : "bobo"
//     }
// ]

app.get("/ping", (req,res)=>{
    console.log("server is ready")
    res.send("server is ready")
})

app.post("/login", async (req,res)=> {

        const email = req.body.email;
        const password = req.body.password;

        const user = await models.newuser.findOne({ where:{
            [Op.and]: [{email: email}, {password: password}]
        } })
        

        // if(user){
        //     res.send("user berhasil masuk")
        // } else{
        //     res.send("user gagal masuk")
        // }
        
        if(user)
        {
            const userToken = {
                email: user.email,
                password : user.password,
                role : user.role
            }

            const token = jwt.sign({ userToken }, process.env.TOKEN_SECRET)

            res.json({
                code : 200,
                message: "Login berhasil",
                token
            })
        } 
        else {
            res.status(422).send({
                code: 422,
                message: "email atau password salah"
            })
        }
    
})

app.listen(port, () => {
    console.log("server is listening on port:", port)
})
