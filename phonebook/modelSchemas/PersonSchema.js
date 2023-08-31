const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
