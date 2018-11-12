const { allRides, ridesPerHour, ridesPerMonth, stationRoot } = require('../library/sql');

module.exports = (app, pool) => {
    app.get('/rides/count', (request, response) => {
        pool.query(allRides, (err, results) => response.send(results.rows[0]));
    });

    app.get('/rides/count/per_month', (request, response) => {
        pool.query(ridesPerMonth, (err, results) => response.send(Transformer.count_by_year_and_month(results.rows)))
    })
    
    app.get('/rides/count/per_hour', (request, response) => {
        pool.query(ridesPerHour, (err, results) => response.send(Transformer.count_by_hour(results.rows)))
    })
    
    app.get('/rides/count/:station', (request, response) => {
        const { params: { station } } = request;

        if (STATIONS[station] === undefined) { response.status(404); return }
        
        const { latitude_range: { min: latMin, max: latMax } } = STATIONS[station];
        const { longitude_range: { min: lonMin, max: lonMax } } = STATIONS[station];
      
        pool.query(stationRoot, [latMin, latMax, lonMin,  lonMax ], ( err, results ) => response.send(results.rows[0]));
      })
    
    app.get('/rides/count/:station/per_month', (request, response) => {
        const { params: { station } } = request;

        if (STATIONS[station] === undefined) { response.status(404); return }
        const { latitude_range }  = STATIONS[station];
        const { longitude_range } = STATIONS[station];
    
        response.send(`TODO ${station}`)
    })
    
    app.get('/rides/count/:station/per_day', (request, response) => {
        const { params: { station } } = request;

        if (STATIONS[station] === undefined) { response.status(404); return }
        const { latitude_range }  = STATIONS[station];
        const { longitude_range } = STATIONS[station];
    
        response.send(`TODO ${station}`)
    })
}