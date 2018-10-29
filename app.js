require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

app.get('/', (request, response) => {
  response.send('I am listening!')
})

app.get('/zagster', (request, response) => {
  let data = []
  const pool = new Pool({
    connectionString: DATABASE_URL,
  })

  pool.query('SELECT * FROM rides LIMIT 1', (err, results) => {
    data = results
    console.log(err, results)
    response.send(results.rows[0])
    pool.end()
  })
})

app.listen(PORT)
