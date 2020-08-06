const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "pinksummer",
  database: "foodies_db",
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
