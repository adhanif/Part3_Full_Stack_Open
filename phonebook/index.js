const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const currentTime = new Date();
  res.send(`Phonebook has info for ${persons.length} people 
  <br/>  ${currentTime}`);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const findPerson = persons.find((person) => person.id === Number(id));
  if (findPerson) {
    res.json(findPerson);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const findPerson = persons.find((person) => person.id === Number(id));
  if (findPerson) {
    const Persons = persons.filter((person) => person.id !== findPerson.id);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

const newID = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;

  return maxId + 1;
};

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  }
  const person = {
    id: newID(),
    name: body.name,
    number: body.number,
  };

  persons = [...persons, person];
  res.json(persons);
});

app.listen(port, () => {
  console.log(`Server started on port  http://localhost:${port}`);
});
