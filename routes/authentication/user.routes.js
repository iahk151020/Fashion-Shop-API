const express = require('express')
const { loginController, signUpController } = require('./user.controller');
const route = express.Router()

route.post('/login', loginController);
route.post('/signup', signUpController);
route.get('', (req, res) => {
    res.send('Hello from user route')
});
module.exports = route;