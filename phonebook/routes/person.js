const express = require("express");
const personRouter = express.Router();

const { getAllPersons, createPerson } = require("../controllers/person");

personRouter.get("/", getAllPersons);
personRouter.post("/", createPerson);

module.exports = { personRouter };
