const Person = require("../modelSchemas/PersonSchema");

const getAllPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.status(201).json(persons);
  } catch (error) {
    next(error);
  }
};

const createPerson = async (req, res, next) => {
  try {
    const { name, number } = req.body;
    const person = await Person.create({ name, number });
    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
};

const deletePerson = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const person = await Person.findById({ _id: id });

    if (person) {
      await Person.findByIdAndDelete({ _id: id });
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
};

const updatePerson = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, number } = req.body;
    const person = await Person.findById({ _id: id });

    if (person) {
      await Person.findByIdAndUpdate(id, {
        name: name,
        number: number,
      });
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};
