const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/favor');
require('./services/passport');

const app = express();
const port = 5000;

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

const Favor = mongoose.model('favor');

app.get('/', (req, res) => res.send('Connection Successful'));
app.listen(port, () => console.log(`Listening on port ${port}!`));