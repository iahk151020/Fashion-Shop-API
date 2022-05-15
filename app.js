const express = require('express')
const app = express()
const routerV1 = require('./routes/api/v1');
const morgan = require('morgan');
// require('dotenv').config();


app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/api/v1/', routerV1);
app.get('/', (req, res) => {
    res.send('Hello from root route')
});

module.exports = app