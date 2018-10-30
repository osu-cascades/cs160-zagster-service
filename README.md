# Zagster Service

A web service API endpoint for Zagster bike share data.

## Development

To get this up and running in your development environment:

You'll need a Postgres server running, and will probably want to use PGAdmin to manage your server.
Create a database, add a table with the appropriate schema, and use PGAdmin to import the CSV data into the table.

Install the dependencies with `npm install`.

Copy `.env.example` to `.env` and set the appropriate environment vars.

Run the server with `node app.js`.

(c) 2018 The OSU Cascades CS 160 Mob
