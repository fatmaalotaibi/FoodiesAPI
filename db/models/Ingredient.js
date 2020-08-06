const { DataTypes, Model } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");
const db = require("../db");

class Ingredient extends Model {}

Ingredient.init(
  {
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

SequelizeSlugify.slugifyModel(Ingredient, {
  source: ["name"],
});

module.exports = Ingredient;
