const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
    //jwt = json web tokens
    //sub = token subject
    //iat - token issued at time
};

exports.signin = function(req, res, next) {
    //once user has been authorized provide them a token
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide an email and password' })
    }

    //check if user email creds already exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) {
            return next(err);
        }

        //if a user cred exists return err
        if (existingUser) {
            //code 422 = unprocessable entity
            return res.status(422).send({ error: 'Email is already registered, please try logging in' });
        }

        //if a user cred doesnt exists create it to memory
        const user = new User({
            email: email,
            password: password
        });
        //save the user cred in memory to db
        user.save(function(err) {
            if (err) {
                return next(err);
            }
            //respond to req indicating user created
            res.json({ token: tokenForUser(user) });

        });
    });
}