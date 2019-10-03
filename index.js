const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/favors');
require('./models/users');
require('./services/passport');

const app = express();
const port = 5000;

//app.use(express.static(path.join(__dirname, '/public')));

app.use(
    cookieSession({ maxAge: 30 * 20 * 60 * 6 * 1000, keys: [keys.cookieKey] })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(port, () => console.log(`Listening on port ${port}!`));