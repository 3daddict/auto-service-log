const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    //verify email
    User.findOne({ email: email }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        //verify password
        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        });

    });
});

//jwt strategy options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    //payload = jwt token (sub and iat)
    //done = callback function we need to call on success
    //check if the user ID in the payload exists in the DB
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

//tell passport to use the strategy
passport.use(jwtLogin);
passport.use(localLogin);