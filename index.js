const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const routes = require('./routes')
app.use(routes)
require("dotenv").config()

const PORT = process.env.PORT || 3000;

app.use('/', routes);
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});