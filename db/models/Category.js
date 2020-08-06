const { DataTypes, Model } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");
const db = require("../db");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize: db,
  }
);

SequelizeSlugify.slugifyModel(Category, {
  source: ["name"],
});

module.exports = Category;
