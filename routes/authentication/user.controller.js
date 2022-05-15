const {checkLongIn, signUp} = require('../../models/dao/user.model');

async function loginController(req, res){
    data = req.body;
    username = data.username;
    password = data.password;
    result = await checkLongIn(username, password);
    res.json(result);
}

async function signUpController(req, res){
    user = req.body;
    result = await signUp(user);
    res.json(result);
}

module.exports = {
    loginController,
    signUpController
}