require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();
const { misc, rides, zagster } = require('./routes');

const PORT = process.env.PORT || 3000

const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

const pool = new Pool({connectionString: DATABASE_URL})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

misc(app);
rides(app, pool);
zagster(app, pool);

app.listen(PORT)
