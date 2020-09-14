const https = require('https');
const { baseApiUrl } = require('../config');

const getRequest = (api) => {
    return new Promise((resolve, reject) => {
        https.get(`${baseApiUrl}/${api}`, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { getRequest };