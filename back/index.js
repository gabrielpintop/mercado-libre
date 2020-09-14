const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { production, port, allowedOrigin } = require('./config');

const requestHandler = require('./utilities/requestHandler');

const itemApi = require('./components/item/itemAPI');

app.use(cors({ origin: allowedOrigin }));
app.use(helmet());
app.use(morgan(production ? 'common' : 'dev'));
app.use(express.json({ limit: '10mb' }));

app.use('/api/items', itemApi);

app.use(requestHandler);

if (production) {
    module.exports = app;
} else {
    app.listen(port, () => {
        console.log(`The server is running on http://localhost:${3001}`);
    });
}