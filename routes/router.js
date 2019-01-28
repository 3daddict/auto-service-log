const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');
const User = require('../models/user');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })


module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send(db.test)
    });

    app.get('/getVehicles', function(req, res, next) {
        const userId = req.data._id;
        User.findById(userId)
          .then(user => { 
            res.status(200).json(data)
            })
          .catch(next)
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);


}; 