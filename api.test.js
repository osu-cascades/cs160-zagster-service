require('dotenv').config();
const request = require('supertest');
const app = require('express')();
app.use('/rides', require('./routes/rides'));

describe('API endpoints', () => {

  const ENDPOINTS = [
    '/rides/example',
    '/rides/count',
    '/rides/count/per_month',
    '/rides/count/per_year',
    '/rides/count/per_hour',
    '/rides/count/g5',
    '/rides/count/g5/per_month',
    '/rides/count/g5/per_day',
    '/rides/count/g5/per_day_of_year',
    '/rides/count/g5/per_year',
    '/rides/count/g5/per_month/memberships',
    '/rides/count/g5/per_week/memberships',
  ]

  ENDPOINTS.forEach( endpoint => {
    test(endpoint, (done) => {
      request(app).get(endpoint).then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });

  const INVALID_ENDPOINTS = [
    '/rides/count/FAKE',
    '/rides/count/FAKE/per_month',
    '/rides/count/FAKE/per_day',
    '/rides/count/FAKE/per_day_of_year',
    '/rides/count/FAKE/per_year',
    '/rides/count/FAKE/per_month/memberships',
    '/rides/count/FAKE/per_week/memberships',
  ]

  INVALID_ENDPOINTS.forEach( endpoint => {
    test(endpoint, (done) => {
      request(app).get(endpoint).then((res) => {
        expect(res.statusCode).toBe(404);
        done();
      });
    });
  });

});
