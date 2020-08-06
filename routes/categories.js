const express = require("express");

//Controllers
const {
  categoryCreate,
  categoryList,
  fetchCategory,
  ingredientCreate,
} = require("../controllers/categoryControllers");

// middleware
const upload = require("../middleware/multer");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  const category = await fetchCategory(categoryId, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const err = new Error("Category not found");
    err.status = 404;
    next(err);
  }
});

// Category List
router.get("/", categoryList);

// Create Category
router.post("/", categoryCreate);

// Create Ingredient
router.post(
  "/:categoryId/ingredients",
  upload.single("image"),
  ingredientCreate
);

module.exports = router;
