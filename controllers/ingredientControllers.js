//Data
const { Ingredient, Category } = require("../db/models");
const { static } = require("express");

exports.fetchIngredient = async (ingredientId, next) => {
  try {
    const ingredient = await ingredient.findByPk(ingredientId);
    return ingredient;
  } catch (error) {
    next(error);
  }
};

exports.ingredientList = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      attributes: { exclude: ["categoryId", "createdAt", "updatedAt"] },
      include: {
        model: Category,
        as: "category",
        attributes: ["name"],
      },
    });
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
