const { zagsterRides } = require('../library/sql');

module.exports = (app, pool) => {
    app.get('/zagster', (request, response) => {
        pool.query(zagsterRides, (err, results) => response.send(results.rows[0]))
    });
}