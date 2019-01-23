const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;

//local strategy options
const localOptions = {
    usernameField: 'email'
};
//local strategy method
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
        if(err) { return done(err); }
        if(!user) { return done(null, false); }

        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false); }

            return done(null, user);
        });
    });
});

//jwt strategy options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};
//jwt strategy method
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    //check if user ID exists in DB
    User.findById(payload.sub, function(err, user) {
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
passport.use(localLogin);