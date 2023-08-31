const express = require("express");
const personRouter = express.Router();

const {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
  getOnePerson,
  getInfoPersons,
} = require("../controllers/personController");

personRouter.get("/", getAllPersons);
personRouter.get("/info", getInfoPersons);
personRouter.get("/:id", getOnePerson);
personRouter.post("/", createPerson);
personRouter.put("/:id", updatePerson);
personRouter.delete("/:id", deletePerson);

module.exports = { personRouter };
