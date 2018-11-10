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

path|description|result
---|---|---
/rides/count | Total number of rows in the _rides_ table.| `{"count":"8675309"}`
/rides/count/by_month | Number of rides per month, per year.| `{"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],"2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],"2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}`
/zagster |A sample route to return one row of data.| `{"id":1,"user_id":"","rental_id":"","start_lat":44.0,"start_lon":-121.3,"end_lat":44.0,"end_lon":-121.3,"start_time":"","end_time":"","membership":""}`

/|A practice route.|I am listening!
/ice_cream                      |A practice route.|_word or phrase_
/RKS                            |A practice route.|_word or phrase_
/HemenwayThanksgiving           |A practice route.|_word or phrase_
/ice_cream                      |A practice route.|_word or phrase_
/RKS                            |A practice route.|_word or phrase_
/HemenwayThanksgiving           |A practice route.|_word or phrase_
/Cat_nya                        |A practice route.|_word or phrase_
/stubaruu                       |A practice route.|_word or phrase_
/karp                           |A practice route.|_word or phrase_
/NOID                           |A practice route.|_word or phrase_
/can_I_get_a_hoo_yaa            |A practice route.|_word or phrase_
/Hungry                         |A practice route.|_word or phrase_
/wright                         |A practice route.|_word or phrase_
/Stewart                        |A practice route.|_word or phrase_
/Bertram                        |A practice route.|_word or phrase_
/kolb                           |A practice route.|_word or phrase_
/best_town                      |A practice route.|_word or phrase_
/football_team                  |A practice route.|_word or phrase_
/cookie_dough                   |A practice route.|_word or phrase_
/YOTE                           |A practice route.|_word or phrase_
/Mock                           |A practice route.|_word or phrase_
/Orue                           |A practice route.|_word or phrase_
/mashjam                        |A practice route.|_word or phrase_
/gomez                          |A practice route.|_word or phrase_
/white                          |A practice route.|_word or phrase_
/doodlebob                      |A practice route.|_word or phrase_
/manbearpig                     |A practice route.|_word or phrase_
/totallysecurechanneladminonly  |A practice route.|_word or phrase_


(c) 2018 The OSU Cascades CS 160 Mob
