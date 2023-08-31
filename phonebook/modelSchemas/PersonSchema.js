const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
