const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email', '']
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/api/dashboard');
        }
    );

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/dashboard', (req,res) => {
        res.send(req.user);
    });
}