const User = require('../schema/user.mongo');

async function checkLongIn(username, password){

    const user = await User.findOne({
        'username': username
    }).exec();

    if (user == null)
        return {
            message: 'Username does not exist',
            user: null
        }
    
    if (user.password != password)
        return {
            message: 'Wrong password',
            user: null
        }    
    
    console.log("id:" + user._id);

    return {
        message: 'ok',
        user: user
    }
}

async function signUp(user){
    try{
        const existUsername = await User.findOne({"username": user.username}).exec();
        if (existUsername != null){
            return "username already exists";
        }

        const existEmail = await User.findOne({"email": user.email}).exec();
        if (existEmail != null){
            return "this email's already used";
        }

        await User.create(user);
        return "sign up successfully";
    }catch(err){
        return "Error occur while sign up";
    }
}

module.exports = {
    checkLongIn,
    signUp
}