# Zagster Service

A web service API providing Zagster bike share data from Bend, OR.

## Usage

Consume the data provided by this web service via the production URL, followed
by the paths listed here in the "Web Service API Endpoints" table.

## Web Service API Endpoints

path|description|result
---|---|---
[/rides/locations_and_times](https://zagster-service.herokuapp.com/rides/locations_and_times) |Rental id, start lat/lon and start/end time of all rides.| `{"rental_id":"xyz","start_lat":44.0,"start_lon":-121.3,"end_lat":44.0,"end_lon":-121.3,"start_time":"yyyymmddhhmm","end_time":"yyyymmddhhmm","membership":"annual"}`
[/rides/count](https://zagster-service.herokuapp.com/rides/count) | Total number of rows in the _rides_ table.| `{"count":"8675309"}`
[/rides/count/per_month](https://zagster-service.herokuapp.com/rides/count/per_month) | Number of rides per month, per year.| `{"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],"2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],"2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}`
[/rides/count/per_year](https://zagster-service.herokuapp.com/rides/count/per_year) | Number of rides per per year.| `{"2016":466,"2017":2213,"2018":16415}`
[/rides/count/per_hour](https://zagster-service.herokuapp.com/rides/count/per_hour) | Number of rides hour.| `{"0":429,"1":231,"2":130,"3":85,"4":42,"5":1,"7":1,"8":17,"9":16,"10":795,"11":425,"12":921,"13":846,"14":1795,"15":1789,"16":2119,"17":1630,"18":1942,"19":1637,"20":1636,"21":1054,"22":843,"23":710}`
[/rides/count/from/:start/to/:end](https://zagster-service.herokuapp.com/rides/count/from/grc/to/osu_cascades) | Total number of rides based on starting location and ending location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:start` and `:end` values in the path.| `{"count":"8675309"}`
[/rides/count/:station](https://zagster-service.herokuapp.com/rides/count/g5) | Total number of rides based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path.| `{"count":"8675309"}`
[/rides/count/:station/per_month](https://zagster-service.herokuapp.com/rides/count/g5/per_month) | Total number of rides per month, per year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path.| `{"2016":[{"11":89},{"12":16}],"2017":[{"1":20},{"2":31},{"3":79} ...] ...}`
[/rides/count/:station/per_day](https://zagster-service.herokuapp.com/rides/count/g5/per_day) | Total number of rides per day, per month, per year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path. Only dates that have rides.| `{2016: {1: {1: 300, 3: 900, 31: 700}, 2: {1: 300, 2: 900, ... 31: 700} }, 2002: {...}}`
[/rides/count/:station/per_day_of_year](https://zagster-service.herokuapp.com/rides/count/g5/per_day_of_year) | Total number of rides per day of each year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path. Only days that have rides.| `{2016: {1: 300, 3: 900, 31: 700}, 2017: {1: 300, 2: 900, ... 312: 700} }`
[/rides/count/:station/per_year](https://zagster-service.herokuapp.com/rides/count/g5/per_year) | Total number of rides per year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path.| `{"2016":466,"2017":2213,"2018":16415}`
[/rides/count/:station/per_month/memberships](https://zagster-service.herokuapp.com/rides/count/g5/per_month/memberships) | Total number of rides per membership type, per, per month, per year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path. Only months that have rides.| `{2016: {1: {'Annual Membership': 300, 'Monthly Membership': 900, 'Hourly Membership': 700}, 2: {'Monthly Membership': 300, 'Pay-as-you-Go Membership: 900} }, 2002: {...}}`
[/rides/count/:station/per_week/memberships](https://zagster-service.herokuapp.com/rides/count/g5/per_week/memberships) | Total number of rides per membership type, per, per week, per year, based on starting location. See [stations.js](https://github.com/osu-cascades/cs160-zagster-service/blob/master/stations.js) for valid `:station` values in the path. Only weeks that have rides.| `{2016: {1: {'Annual Membership': 300, 'Monthly Membership': 900, 'Hourly Membership': 700}, 2: {'Monthly Membership': 300, 'Pay-as-you-Go Membership: 900} }, 2002: {...}}`
[/rides/example](https://zagster-service.herokuapp.com/rides/example) |A sample route to return one row of data.| `{"id":1,"user_id":"","rental_id":"","start_lat":44.0,"start_lon":-121.3,"end_lat":44.0,"end_lon":-121.3,"start_time":"","end_time":"","membership":""}`
[/](https://zagster-service.herokuapp.com/)|A practice route.|I am listening!
[/ice_cream](https://zagster-service.herokuapp.com/ice_cream)|A practice route.|_word or phrase_
[/you_lazy](https://zagster-service.herokuapp.com/you_lazy)|A practice route.|_word or phrase_
[/cs](https://zagster-service.herokuapp.com/cs)|A practice route.|_word or phrase_
[/HELLO](https://zagster-service.herokuapp.com/HELLO)|A practice route.|_word or phrase_
[/LightningInABottle](https://zagster-service.herokuapp.com/LightningInABottle)|A practice route.|_word or phrase_
[/help!](https://zagster-service.herokuapp.com/help!)|A practice route.|_word or phrase_
[/why_did_the_chicken_cross_the_road](https://zagster-service.herokuapp.com/why_did_the_chicken_cross_the_road)|A practice route.|_word or phrase_
[/howdy](https://zagster-service.herokuapp.com/howdy)|A practice route.|_word or phrase_
[/how_are_you_sugar](https://zagster-service.herokuapp.com/how_are_you_sugar)|A practice route.|_word or phrase_
[/winter](https://zagster-service.herokuapp.com/winter)|A practice route.|_word or phrase_
[/bend](https://zagster-service.herokuapp.com/bend)|A practice route.|_word or phrase_
[/yeet](https://zagster-service.herokuapp.com/yeet)|A practice route.|_word or phrase_
[/hi](https://zagster-service.herokuapp.com/hi)|A practice route.|_word or phrase_
[/num_nums](https://zagster-service.herokuapp.com/num_nums)|A practice route.|_word or phrase_
[/pizza](https://zagster-service.herokuapp.com/pizza)|A practice route.|_word or phrase_
[/uh_oh](https://zagster-service.herokuapp.com/uh_oh)|A practice route.|_word or phrase_
[/tired](https://zagster-service.herokuapp.com/tired)|A practice route.|_word or phrase_
[/why_frog_sad](https://zagster-service.herokuapp.com/why_frog_sad)|A practice route.|_word or phrase_
[/loss](https://zagster-service.herokuapp.com/loss)|A practice route.|_word or phrase_
[/listening](https://zagster-service.herokuapp.com/listening)|A practice route.|_word or phrase_
[/best_dog](https://zagster-service.herokuapp.com/best_dog)|A practice route.|_word or phrase_
[/weather](https://zagster-service.herokuapp.com/weather)|A practice route.|_word or phrase_
[/dogs](https://zagster-service.herokuapp.com/dogs)|A practice route.|_word or phrase_
[/money](https://zagster-service.herokuapp.com/money)|A practice route.|_word or phrase_
[/minecraft](https://zagster-service.herokuapp.com/minecraft)|A practice route.|_word or phrase_
[/query](https://zagster-service.herokuapp.com/query)|A practice route.|_word or phrase_
[/please_help](https://zagster-service.herokuapp.com/please_help)|A practice route.|_word or phrase_
[/RKS](https://zagster-service.herokuapp.com/RKS)|A practice route.|_word or phrase_
[/HemenwayThanksgiving](https://zagster-service.herokuapp.com/HemenwayThanksgiving)|A practice route.|_word or phrase_
[/Cat_nya](https://zagster-service.herokuapp.com/Cat_nya)|A practice route.|_word or phrase_
[/stubaruu](https://zagster-service.herokuapp.com/stubaruu)|A practice route.|_word or phrase_
[/karp](https://zagster-service.herokuapp.com/karp)|A practice route.|_word or phrase_
[/NOID](https://zagster-service.herokuapp.com/NOID)|A practice route.|_word or phrase_
[/can_I_get_a_hoo_yaa](https://zagster-service.herokuapp.com/can_I_get_a_hoo_yaa)|A practice route.|_word or phrase_
[/Hungry](https://zagster-service.herokuapp.com/Hungry)|A practice route.|_word or phrase_
[/wright](https://zagster-service.herokuapp.com/Wright)|A practice route.|_word or phrase_
[/Stewart](https://zagster-service.herokuapp.com/Stewart)|A practice route.|_word or phrase_
[/Bertram](https://zagster-service.herokuapp.com/Bertram)|A practice route.|_word or phrase_
[/kolb](https://zagster-service.herokuapp.com/kolb)|A practice route.|_word or phrase_
[/best_town](https://zagster-service.herokuapp.com/best_town)|A practice route.|_word or phrase_
[/football_team](https://zagster-service.herokuapp.com/football_team)|A practice route.|_word or phrase_
[/cookie_dough](https://zagster-service.herokuapp.com/cookie_dough)|A practice route.|_word or phrase_
[/YOTE](https://zagster-service.herokuapp.com/YOTE)|A practice route.|_word or phrase_
[/Mock](https://zagster-service.herokuapp.com/Mock)|A practice route.|_word or phrase_
[/Orue](https://zagster-service.herokuapp.com/Orue)|A practice route.|_word or phrase_
[/mashjam](https://zagster-service.herokuapp.com/mashjam)|A practice route.|_word or phrase_
[/gomez](https://zagster-service.herokuapp.com/gomez)|A practice route.|_word or phrase_
[/white](https://zagster-service.herokuapp.com/white)|A practice route.|_word or phrase_
[/doodlebob](https://zagster-service.herokuapp.com/doodlebob)|A practice route.|_word or phrase_
[/manbearpig](https://zagster-service.herokuapp.com/manbearpig)|A practice route.|_word or phrase_
[/totallysecurechanneladminonly](https://zagster-service.herokuapp.com/totallysecurechanneladminonly)|A practice route.|_word or phrase_

(c) 2018 Yong Bakos and the OSU Cascades CS 160 Mob. All right reserved.
