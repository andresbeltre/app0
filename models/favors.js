const mongoose = require("mongoose");
const { Schema } = mongoose;
//favorType: String, favorDate: String

const favorSchema = new Schema({
  favorName: String,
  favorDescription: String
});

mongoose.model("favors", favorSchema);
