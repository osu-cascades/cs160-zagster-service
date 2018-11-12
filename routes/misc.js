const routingInformation = require('./routing-information');

module.exports = app => {
    for(let information of routingInformation) {
        let { route, response: responseInformation } = information;
        app.get(route, (request, response) => response.send(responseInformation));
    }
}