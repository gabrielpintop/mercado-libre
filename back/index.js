const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const { production, port, baseApiUrl } = require('./config');

const requestHandler = require('./utilities/requestHandler');

const itemApi = require('./components/item/itemAPI');

app.use(helmet());
app.use(morgan(production ? 'common' : 'dev'));
app.use(express.json({ limit: '10mb' }));

app.use('/api/items', itemApi);

app.use(requestHandler);

console.log(production);
console.log(baseApiUrl);

if (production) {
    module.exports = app;
} else {
    app.listen(port, () => {
        console.log(`The server is running on http://localhost:${3001}`);
    });
}