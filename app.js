require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('I am listening!'))

app.listen(PORT)

