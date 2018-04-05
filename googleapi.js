const request = require('request');

var getAddress = (address, callback) => {

    request({
        //url: 'http://maps.googleapis.com/maps/api/geocode/json?address=folwark%20leszcyznowka',
        url: 'http://maps.googleapis.com/maps/api/geocode/json' +
            '?address=' + encodeURIComponent(address),
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to Google Maps');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Cannot find requested address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                type: body.results[0].types[0]
            });
            //console.log(`Your requested venue: ${address}`);
            //console.log(`Address: ${body.results[0].formatted_address}`);
            //console.log(`Type: ${body.results[0].types[0]}`);
        }
    });

};

var GoogleMapsAPIkey = AIzaSyBGT9DtN2cOFyQW8CY5GD7cHYbeWsBoox8

module.exports = {
    getAddress
};
