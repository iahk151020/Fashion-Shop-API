const express = require('express')
const app = express()
const routerV1 = require('./routes/api/v1');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');
const session = require('express-session');
require('dotenv').config();

app.use(session({secret: "cats"}));
app.use(passport.initialize()); //it also sets a session and return cookie back to browser
app.use(passport.session()); 


passport.use(new Strategy({
    callbackURL: 'http://localhost:5000/auth/google/callback',
    clientID: "965005070758-0kacskfcla06hg1uvu90k9e0hma2gh2v.apps.googleusercontent.com",
    clientSecret: "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",
    // profileFields: ['id', 'displayName', 'name']
}, (accessToken, refreshToken, profile, done) => {
    console.log('facebook profile', profile);
    done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

function checkLoggedIn(req, res, next){
    console.log(req.isAuthenticated());
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn){
        return res.status(401).json({
            err: "you are not logged in"
        })
    }
}



app.use(express.json());
app.use(express.static('public'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/api/v1/', routerV1);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['email']//scope specify which data we're requesting from google when succeed
}), (req, res) => {
    console.log(1);
});

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure2',
        successRedirect: '/success',
        session: true
    }),
    (req, res) => {
        console.log('Google callback us');
    }
)

app.get('/success', (req, res) => {
    res.send('Login successfully by google');
})

app.get('/failure2', (req, res) => {
    res.send('failed to login by google');
})

app.get('/home', checkLoggedIn,  (req, res) => {
    res.send(1);
});

module.exports = app