const User = require('../models/user');

exports.signUp = (req, res, next) => {
    const submittedEmail = req.body.email;
    const submittedPassword = req.body.password;
    //Check if user email exists
    User.findOne({ email: submittedEmail }, (err, existingUser) => {
        if(err) { return next(err) };
        //If exists return err
        if(existingUser) { 
            return res.status(422).send({ error: 'Email is already in use' });
         }
         //If new email then create and save record
         const submittedUser = new User({
             email: submittedEmail,
             password: submittedPassword
         })
         //save record to database
         submittedUser.save((err) => {
            if(err) { return next(err) }
            //on success
            res.json({ success: true });
         });
    })

};