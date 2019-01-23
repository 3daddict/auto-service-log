const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;

//jwt strategy options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

//jwt strategy method
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    //check if user ID exists in DB
    User.findById(payload.sub, (err, user) => {
        //if user not found return err
        if(err) { return done(err, false); }
        //if user found
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

//use strategy with passport
passport.use(jwtLogin);