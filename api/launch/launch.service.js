const rp = require('request-promise');

exports.getLauches = () => {
    return rp.get({
        url: 'https://api.spacexdata.com/v3/launches',
        json: true
    });
};