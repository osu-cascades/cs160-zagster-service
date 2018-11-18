const rides = require('express').Router();

const { Pool } = require('pg');
const DATABASE_URL = process.env.DATABASE_URL || 'UNDEFINED';
const pool = new Pool({connectionString: DATABASE_URL});

const Transformer = require('../transformer');
const STATIONS = require('../stations');


rides.get('/example', (req, res) => {
  const SQL = 'SELECT * FROM rides LIMIT 1;';
  pool.query(SQL, (err, results) => res.send(results.rows[0]));
});

rides.get('/count', (req, res) => {
  const SQL = 'SELECT COUNT(*) FROM rides;';
  pool.query(SQL, (err, results) => res.send(results.rows[0]));
});

rides.get('/count/per_month', (req, res) => {
  const SQL =
    `SELECT extract(month from start_time) as month,
     extract(year from start_time) as year,
     COUNT(*) as count
     FROM rides
     GROUP BY year, month
     ORDER BY year, month;`;
  pool.query(SQL, (err, results) => {
    res.send(Transformer.countByYearAndMonth(results.rows));
  });
});

rides.get('/count/per_year', (req, res) => {
  const SQL =
    `SELECT extract(year from start_time) as year,
     COUNT(*) as count
     FROM rides
     GROUP BY year
     ORDER BY year;`
  pool.query(SQL, (err, results) => {
    res.send(Transformer.countByYear(results.rows));
  });
});

rides.get('/count/per_hour', (req, res) => {
  const SQL =
    `SELECT date_part('hour', start_time) as hour, COUNT(*) as count
     FROM rides
     GROUP BY date_part('hour', start_time)
     ORDER BY hour`;
  pool.query(SQL, (err, results) => {
    res.send(Transformer.countByHour(results.rows));
  });
});

rides.get('/count/(:station)(/*)?', (req, res, next) => {
  if (STATIONS[req.params.station] === undefined) { res.sendStatus(404); return; }
  else next();
});

rides.get('/count/:station', (req, res) => {
  const {
    latitudeRange: {min: minLat, max: maxLat},
    longitudeRange: {min: minLon, max: maxLon}
  } = STATIONS[req.params.station];
  const SQL =
    `SELECT COUNT(*) FROM rides
     WHERE start_lat > $1 AND start_lat < $2 AND start_lon > $3 AND start_lon < $4`;
  pool.query(SQL, [minLat, maxLat, minLon, maxLon], (err, results) => {
    res.send(results.rows[0]);
  });
});

rides.get('/count/:station/per_month', (req, res) => {
  const {
    latitudeRange: {min: minLat, max: maxLat},
    longitudeRange: {min: minLon, max: maxLon}
  } = STATIONS[req.params.station];
  const SQL =
    `SELECT extract(month from start_time) as month,
     extract(year from start_time) as year,
     COUNT(*) as count
     FROM rides
     WHERE start_lat > $1 AND start_lat < $2 AND start_lon > $3 AND start_lon < $4
     GROUP BY year, month
     ORDER BY year, month;`;
  pool.query(SQL, [minLat, maxLat, minLon, maxLon], (err, results) => {
    res.send(Transformer.countByYearAndMonth(results.rows));
  });
});

rides.get('/count/:station/per_day', (req, res) => {
  const {
    latitudeRange: {min: minLat, max: maxLat},
    longitudeRange: {min: minLon, max: maxLon}
  } = STATIONS[req.params.station];

  const SQL =
    `SELECT extract(year from start_time) as year,
     extract(month from start_time) as month,
     extract(day from start_time) as day,
     COUNT(*) as count
     FROM rides
     WHERE start_lat > $1 AND start_lat < $2 AND start_lon > $3 AND start_lon < $4
     GROUP BY year, month, day
     ORDER BY year, month, day;`;
  pool.query(SQL, [minLat, maxLat, minLon, maxLon], (err, results) => {
    res.send(Transformer.countByYearAndMonthAndDay(results.rows));
  });
});

rides.get('/count/:station/per_day_of_year', (req, res) => {
  const {
    latitudeRange: {min: minLat, max: maxLat},
    longitudeRange: {min: minLon, max: maxLon}
  } = STATIONS[req.params.station];

  const SQL =
    `SELECT extract(year from start_time) as year,
     extract(doy from start_time) as day,
     COUNT(*) as count
     FROM rides
     WHERE start_lat > $1 AND start_lat < $2 AND start_lon > $3 AND start_lon < $4
     GROUP BY year, day
     ORDER BY year, day;`;
  pool.query(SQL, [minLat, maxLat, minLon, maxLon], (err, results) => {
    res.send(Transformer.countByYearAndDayOfYear(results.rows));
  });
});

module.exports = rides;
