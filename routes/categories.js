const express = require("express");

//Controllers
const {
  categoryCreate,
  categoryList,
  fetchCategory,
} = require("../controllers/categoryControllers");

// middleware
const upload = require("../middleware/storage");

const router = express.Router();

router.param("categoryId", async (req, res, next, categoryId) => {
  console.log(`The value of category's ID is ${categoryId}`);
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

// create category
router.post("/", upload.single("image"), categoryCreate);

// update category
router.put("/:categoryId", upload.single("image"), categoryUpdate);

//delete category
router.delete("/:categoryId", categoryDelete);

module.exports = router;
