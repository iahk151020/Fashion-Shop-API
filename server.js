const http = require('http');
const app = require('./app');
const connectDB = require('./services/connectDB');
require('dotenv').config();
const port = process.env.PORT || 5000;

const server = http.createServer(app);

async function start(){
    await connectDB();
    server.listen(port, () => console.log(`Server is listening on port ${port}`));
}

start();