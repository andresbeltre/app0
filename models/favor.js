const mongoose = require('mongoose');
const { Schema } = mongoose;

const favorSchema = new Schema({
    favorID: String,
    favorName: String,
    favorType: String,
    favorDate: String
});

mongoose.model('favor', favorSchema);