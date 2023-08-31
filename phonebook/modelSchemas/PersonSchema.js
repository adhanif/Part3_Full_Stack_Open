const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
      required: true,
    },
  },
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
