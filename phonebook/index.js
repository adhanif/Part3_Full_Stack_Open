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

app.listen(port, () => {
  console.log(`Server started on port  http://localhost:${port}`);
});
