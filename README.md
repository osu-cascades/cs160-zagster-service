# Zagster Service

A web service API endpoint for Zagster bike share data.

## Development

To get this up and running in your development environment:

You'll need a Postgres server running, and will probably want to use PGAdmin to manage your server.
Create a database, add a table with the appropriate schema, and use PGAdmin to import the CSV data into the table.

Install the dependencies with `npm install`.

Copy `.env.example` to `.env` and set the appropriate environment vars.

Run the server with `node app.js`.

## Route Handlers

|path|result|description|
|---|---|---|
|/zagster | `{"id":1,"user_id":"","rental_id":"","start_lat":44.0,"start_lon":-121.3,"end_lat":44.0,"end_lon":-121.3,"start_time":"","end_time":"","membership":""}`|A sample route to return one row of data.
|/rides/count | `{"count":"8675309"}`| Total number of rows in the _rides_ table.
|/| I am listening!|A practice route
|/ice_cream                      |_word or phrase_|A practice route|
|/RKS                            |_word or phrase_|A practice route|
|/HemenwayThanksgiving           |_word or phrase_|A practice route|
|/ice_cream                      |_word or phrase_|A practice route|
|/RKS                            |_word or phrase_|A practice route|
|/HemenwayThanksgiving           |_word or phrase_|A practice route|
|/Cat_nya                        |_word or phrase_|A practice route|
|/stubaruu                       |_word or phrase_|A practice route|
|/karp                           |_word or phrase_|A practice route|
|/NOID                           |_word or phrase_|A practice route|
|/can_I_get_a_hoo_yaa            |_word or phrase_|A practice route|
|/Hungry                         |_word or phrase_|A practice route|
|/wright                         |_word or phrase_|A practice route|
|/Stewart                        |_word or phrase_|A practice route|
|/Bertram                        |_word or phrase_|A practice route|
|/kolb                           |_word or phrase_|A practice route|
|/best_town                      |_word or phrase_|A practice route|
|/football_team                  |_word or phrase_|A practice route|
|/cookie_dough                   |_word or phrase_|A practice route|
|/YOTE                           |_word or phrase_|A practice route|
|/Mock                           |_word or phrase_|A practice route|
|/Orue                           |_word or phrase_|A practice route|
|/mashjam                        |_word or phrase_|A practice route|
|/gomez                          |_word or phrase_|A practice route|
|/white                          |_word or phrase_|A practice route|
|/doodlebob                      |_word or phrase_|A practice route|
|/manbearpig                     |_word or phrase_|A practice route|
|/totallysecurechanneladminonly  |_word or phrase_|A practice route|


(c) 2018 The OSU Cascades CS 160 Mob
