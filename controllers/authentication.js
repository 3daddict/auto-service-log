const User = require('../models/user');

exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    //verify email and password entered
    if(!email || !password) {
        return res.status(422).send({ error: 'Please provide an email and password' })
    }

    //Check if user email exists
    User.findOne({ email: email }, (err, existingUser) => {
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
         user.save((err) => {
            if(err) { return next(err) }
            //on success
            res.json({ success: true });
         });
    })

};