require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', require('./routes/examples'));
app.use('/rides', require('./routes/rides'));

app.listen(PORT);
