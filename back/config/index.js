require('dotenv').config();

const config = { production: process.env.PRODUCTION === 'true', baseApiUrl: process.env.BASE_API_URL, port: process.env.PORT || 3001, };

module.exports = config;