const slugify = require("slugify");

//data
const { Category } = require("../db/models");

exports.fetchCategory = async (categoryId, next) => {
  try {
    const category = await Category.findByPk(categoryId);
    return category;
  } catch (error) {
    next(error);
  }
};

exports.categoryList = async (req, res, next) => {
  try {
    const _categorys = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(_categorys);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    if (require.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
