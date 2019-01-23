const User = require('../models/user');
const jwt = require('jwt-simple');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

exports.signin = function(req, res, next) {
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    //verify email and password entered
    if(!email || !password) {
        return res.status(422).send({ error: 'Please provide an email and password' })
    }

    //Check if user email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) { return next(err) };
        //If exists return err
        if(existingUser) { 
            return res.status(422).send({ error: 'Email is already in use' });
         }
         //If new email then create and save record
         const user = new User({
             email: email,
             password: password
         })
         //save record to database
         user.save(function(err) {
            if(err) { return next(err) }
            //on success
            res.json({ token: tokenForUser(user) });
         });
    })

};