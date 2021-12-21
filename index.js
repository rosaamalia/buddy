const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')
require("dotenv").config()

const PORT = process.env.PORT || 3000;


app.use('/api/', routes);
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});