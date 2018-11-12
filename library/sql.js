module.exports = {
    allRides: 'SELECT COUNT(*) FROM rides;',
    ridesPerMonth: `SELECT extract(month from start_time) as month,
               extract(year from start_time) as year,
               COUNT(*) as count
               FROM rides
               GROUP BY year, month
               ORDER BY year, month;`,
    ridesPerHour: `SELECT date_part('hour', start_time) 
              as hour, COUNT(*) as count
              FROM rides
              GROUP BY date_part('hour', start_time)
              ORDER BY hour`,
    stationRoot: `SELECT COUNT(*) FROM rides
                  WHERE start_lat > $1 AND start_lat < $2 
                  AND start_lon > $3 AND start_lon < $4`,
    zagsterRides: "SELECT * FROM rides LIMIT 1;"        
}