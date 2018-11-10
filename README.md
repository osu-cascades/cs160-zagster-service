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
[/rides/count](https://zagster-service.herokuapp.com/rides/count) | Total number of rows in the _rides_ table.| `{"count":"8675309"}`
[/rides/count/by_month](https://zagster-service.herokuapp.com/rides/count/by_month) | Number of rides per month, per year.| `{"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],"2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],"2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}`
[/rides/count/by_hour](https://zagster-service.herokuapp.com/rides/count/by_hour) | Number of rides hour.| `{"0":429,"1":231,"2":130,"3":85,"4":42,"5":1,"7":1,"8":17,"9":16,"10":795,"11":425,"12":921,"13":846,"14":1795,"15":1789,"16":2119,"17":1630,"18":1942,"19":1637,"20":1636,"21":1054,"22":843,"23":710}`
[/zagster](https://zagster-service.herokuapp.com/zagster) |A sample route to return one row of data.| `{"id":1,"user_id":"","rental_id":"","start_lat":44.0,"start_lon":-121.3,"end_lat":44.0,"end_lon":-121.3,"start_time":"","end_time":"","membership":""}`
[/](https://zagster-service.herokuapp.com/)|A practice route.|I am listening!
[/ice_cream](https://zagster-service.herokuapp.com/ice_cream)                      |A practice route.|_word or phrase_
[/RKS](https://zagster-service.herokuapp.com/RKS)                            |A practice route.|_word or phrase_
[/HemenwayThanksgiving](https://zagster-service.herokuapp.com/HemenwayThanksgiving)           |A practice route.|_word or phrase_
[/Cat_nya](https://zagster-service.herokuapp.com/Cat_nya)                        |A practice route.|_word or phrase_
[/stubaruu](https://zagster-service.herokuapp.com/stubaruu)                       |A practice route.|_word or phrase_
[/karp](https://zagster-service.herokuapp.com/karp)                           |A practice route.|_word or phrase_
[/NOID](https://zagster-service.herokuapp.com/NOID)                           |A practice route.|_word or phrase_
[/can_I_get_a_hoo_yaa](https://zagster-service.herokuapp.com/can_I_get_a_hoo_yaa)            |A practice route.|_word or phrase_
[/Hungry](https://zagster-service.herokuapp.com/Hungry)                         |A practice route.|_word or phrase_
[/wright](https://zagster-service.herokuapp.com/Wright)                         |A practice route.|_word or phrase_
[/Stewart](https://zagster-service.herokuapp.com/Stewart)                        |A practice route.|_word or phrase_
[/Bertram](https://zagster-service.herokuapp.com/Bertram)                        |A practice route.|_word or phrase_
[/kolb](https://zagster-service.herokuapp.com/kolb)                           |A practice route.|_word or phrase_
[/best_town](https://zagster-service.herokuapp.com/best_town)                      |A practice route.|_word or phrase_
[/football_team](https://zagster-service.herokuapp.com/football_team)                  |A practice route.|_word or phrase_
[/cookie_dough](https://zagster-service.herokuapp.com/cookie_dough)                   |A practice route.|_word or phrase_
[/YOTE](https://zagster-service.herokuapp.com/YOTE)                           |A practice route.|_word or phrase_
[/Mock](https://zagster-service.herokuapp.com/Mock)                           |A practice route.|_word or phrase_
[/Orue](https://zagster-service.herokuapp.com/Orue)                           |A practice route.|_word or phrase_
[/mashjam](https://zagster-service.herokuapp.com/mashjam)                        |A practice route.|_word or phrase_
[/gomez](https://zagster-service.herokuapp.com/gomez)                          |A practice route.|_word or phrase_
[/white](https://zagster-service.herokuapp.com/white)                          |A practice route.|_word or phrase_
[/doodlebob](https://zagster-service.herokuapp.com/doodlebob)                      |A practice route.|_word or phrase_
[/manbearpig](https://zagster-service.herokuapp.com/manbearpig)                     |A practice route.|_word or phrase_
[/totallysecurechanneladminonly](https://zagster-service.herokuapp.com/totallysecurechanneladminonly)  |A practice route.|_word or phrase_


(c) 2018 The OSU Cascades CS 160 Mob
