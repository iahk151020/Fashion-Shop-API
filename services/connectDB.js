const MONGODB_URL = 'mongodb://localhost:27017/Android';
const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

async function connectDB() {
    await mongoose.connect(MONGODB_URL);
}

module.exports = connectDB;