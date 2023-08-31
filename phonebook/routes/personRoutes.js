const express = require("express");
const personRouter = express.Router();

const {
  getAllPersons,
  createPerson,
  deletePerson,
} = require("../controllers/personController");

personRouter.get("/", getAllPersons);
personRouter.post("/", createPerson);
personRouter.delete("/:id", deletePerson);

module.exports = { personRouter };
