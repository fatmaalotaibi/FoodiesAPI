const express = require("express");

//Controllers
const {
  ingredientList,
  fetchIngredient,
} = require("../controllers/ingredientControllers");

// middleware
const upload = require("../middleware/multer");

const router = express.Router();

router.param("ingredientId", async (req, res, next, ingredientId) => {
  const ingredient = await fetchIngredient(ingredientId, next);

  if (ingredient) {
    req.ingredient = ingredient;
    next();
  } else {
    const err = new Error("Ingredient not found");
    err.status = 404;
    next(err);
  }
});

// Ingredient List
router.get("/", ingredientList);

module.exports = router;
