const express = require("express");
const personRouter = express.Router();

const {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/personController");

personRouter.get("/", getAllPersons);
personRouter.post("/", createPerson);
personRouter.put("/:id", updatePerson);
personRouter.delete("/:id", deletePerson);

module.exports = { personRouter };
