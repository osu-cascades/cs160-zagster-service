require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

console.log(DATABASE_URL)
const { Pool, Client } = require('pg')

const pool = new Pool({
  connectionString: DATABASE_URL,
})

pool.query('SELECT * FROM rides LIMIT 1', (err, res) => {
  console.log(err, res)
  pool.end()
})

// const client = new Client({
//   connectionString: DATABASE_URL,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

app.get('/', (req, res) => res.send('I am listening!'))

app.listen(PORT)
