#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const NodeGeocoder = require('node-geocoder')

const options = {
    provider: 'here',
    appId: argv.appId || process.env.GEOCODER_APP_ID,
    appCode: argv.appCode || process.env.GEOCODER_APP_CODE,
}

const geocoder = NodeGeocoder(options)

// console.log('ok')
// console.log(argv)
let location = argv.location

if(!location) {
    console.error('Location parameter is required')
    return
}

// Using callback
// geocoder.geocode('Querétaro méxico', function(err, res) {
//     console.log(res);
// });
//
// Or using Promise

return geocoder.geocode(location)
    .then(res => console.log(JSON.stringify(res) ) )
    .catch(function(err) {
        return err;
    });