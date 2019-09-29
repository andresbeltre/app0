const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/favors');
require('./models/users');
require('./services/passport');
const keys = require('./config/keys');

const app = express();
const port = 5000;

app.use(
    cookieSession({ maxAge: 30 * 20 * 60 * 6 * 1000, keys: [keys.cookieKey] })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/', (req, res) => res.send('Connection Successful'));
app.listen(port, () => console.log(`Listening on port ${port}!`));