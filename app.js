const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//////////////////////////////////////////////////////////
//DB
const db = require("./db");
const { Category } = require("./db/models");

//Routes
const categoryRoutes = require("./routes/categories");
const ingredientRoutes = require("./routes/ingredients");

// Create Express App instance
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
});

// Routers
app.use("/categories", categoryRoutes);
app.use("/ingredients", ingredientRoutes);

//Not Found Paths
app.use((req, res, next) => {
  const error = new Error("Path not found");
  error.status = 404;
  next(error);
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message || "Internal Server Error");
});

const run = async () => {
  try {
    await db.sync();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
