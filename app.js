require('dotenv').config();
const express = require('express');
const app = express();

const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED";
const pool = new Pool({connectionString: DATABASE_URL});

const Transformer = require('./transformer');
const STATIONS = require('./stations');

app.use('/', require('./routes/examples'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/rides/count', (req, res) => {
  const SQL = "SELECT COUNT(*) FROM rides;";
  pool.query(SQL, (err, results) => res.send(results.rows[0]));
})

app.get('/rides/count/per_month', (req, res) => {
  const SQL =
    `SELECT extract(month from start_time) as month,
     extract(year from start_time) as year,
     COUNT(*) as count
     FROM rides
     GROUP BY year, month
     ORDER BY year, month;`;
  pool.query(SQL, (err, results) => {
    res.send(Transformer.count_by_year_and_month(results.rows));
  })
})

app.get('/rides/count/per_hour', (req, res) => {
  const SQL =
    `SELECT date_part('hour', start_time) as hour, COUNT(*) as count
     FROM rides
     GROUP BY date_part('hour', start_time)
     ORDER BY hour`;
  pool.query(SQL, (err, results) => {
    res.send(Transformer.count_by_hour(results.rows));
  })
})

app.get('/rides/count/:station', (req, res) => {
  if (STATIONS[req.params.station] === undefined) { res.sendStatus(404); return; }
  const lat_range = STATIONS[req.params.station].latitude_range;
  const lon_range = STATIONS[req.params.station].longitude_range;
  const SQL =
    `SELECT COUNT(*) FROM rides
     WHERE start_lat > $1 AND start_lat < $2 AND start_lon > $3 AND start_lon < $4`;
  pool.query(SQL, [lat_range.min, lat_range.max, lon_range.min, lon_range.max], (err, results) => {
    res.send(results.rows[0]);
  })
})

app.get('/rides/count/:station/per_month', (req, res) => {
  if (STATIONS[req.params.station] === undefined) { res.sendStatus(404); return; }
  const latitude_range = STATIONS[req.params.station].latitude_range;
  const longitude_range = STATIONS[req.params.station].longitude_range;

  res.send(`TODO ${req.params.station}`);
})

app.get('/rides/count/:station/per_day', (req, res) => {
  if (STATIONS[req.params.station] === undefined) { res.sendStatus(404); return; }
  const latitude_range = STATIONS[req.params.station].latitude_range;
  const longitude_range = STATIONS[req.params.station].longitude_range;

  res.send(`TODO ${req.params.station}`);
})

app.get('/zagster', (req, res) => {
  const SQL = "SELECT * FROM rides LIMIT 1;";
  pool.query(SQL, (err, results) => res.send(results.rows[0]));
})

app.listen(PORT);
