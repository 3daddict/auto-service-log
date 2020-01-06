const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');
const User = require('../models/user');
const graphqlHTTP = require('express-graphql')

const { schema } = require('../services/graphql-schema')
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })


module.exports = function(app) {
    app.post('/graphql', graphqlHTTP({
        schema,
        graphiql: false,
    }))
    app.use('/graphiql', graphqlHTTP({
        schema, graphiql: true
    }))


    app.get('/', requireAuth, function(req, res) {
        res.send(db.test)
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}; 