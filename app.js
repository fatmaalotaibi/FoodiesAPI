const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const cookies = require("./categoryData");
const categories = require("./categoryData");

//Routes
app.get("/categories", (req, res) => {
  res.json(categories);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
