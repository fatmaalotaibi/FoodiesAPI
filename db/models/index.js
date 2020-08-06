const Category = require("./Category");
const Ingredient = require("./Ingredient");

Category.hasMany(Ingredient, {
  as: "ingredients",
  foreignKey: "categoryId",
  allowNull: false,
});
Ingredient.belongsTo(Category, { as: "category" });

module.exports = { Category, Ingredient };
