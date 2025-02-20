const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const trailerRoutes = require("./routes/trailerRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("database connected.");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`server is up and running on port ${port}...`);
});

app.use(trailerRoutes);
