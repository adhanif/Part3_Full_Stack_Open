const Person = require("../modelSchemas/PersonSchema");

const getAllPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.status(201).json(persons);
  } catch (error) {
    next(error);
  }
};

const createPerson = async (req, res) => {
  try {
    const { name, number } = req.body;
    const person = await Person.create({ name, number });
    res.status(201).json(person);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllPersons,
  createPerson,
};
