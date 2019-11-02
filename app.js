require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

app.get('/zagster', (request, response) => {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query('SELECT * FROM rides LIMIT 1', (err, results) => {
    response.send(results.rows[0])
    pool.end()
  })
})

app.get('/', (request, response) => {
  response.send('I am listening!')
})

app.get('/example', (request,response) => response.send("Mint ice cream!"))

app.listen(PORT)
