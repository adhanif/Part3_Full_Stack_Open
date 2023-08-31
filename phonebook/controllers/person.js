const Person = require("../modelSchemas/PersonSchema");

const getAllPersons = async (req, res) => {
  try {
  } catch (error) {}
};

const createPerson = async (req, res) => {
  try {
    const { name, number } = req.body;
    const person = await Person.create({ name, number });
    res.status(201).json(person);
  } catch (error) {}
};

module.exports = {
  getAllPersons,
  createPerson,
};
