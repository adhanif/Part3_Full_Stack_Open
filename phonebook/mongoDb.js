const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected to teh database"))
  .catch((err) => {
    console.log("Lost connection to the database", err);
  });
