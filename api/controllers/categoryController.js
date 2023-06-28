const { Category } = require("../models/index.js");

const allCategory = async (req, res) => {
  try {
    let data = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.send({
      status: true,
      entity: data,
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const { categoeryName, imageSrc } = req.body;
    const existingCategory = await Category.findOne({
      where: { categoeryName: categoeryName },
    });

    if (!existingCategory) {
      const newCategory = await Category.create({
        categoeryName: categoeryName,
        imageSrc: imageSrc,
      });
      res.send({
        status: true,
        entity: newCategory,
      });
    } else {
      res.send({
        status: false,
        entity: "category already exist",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const targetId = req.params.id;
    const { categoeryName } = req.body;
    const existingCategory = await Category.findOne({
      where: { categoeryName: categoeryName },
    });
    const targetCategory = await Category.findOne({
      where: {
        id: targetId,
      },
    });

    await Category.update(
      { ...req.body },
      {
        where: {
          id: targetId,
        },
      }
    );

    res.send({
      status: true,
      entity: "Updated successful",
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const targetId = req.params.id;
    const existingId = await Category.findOne({
      where: { id: targetId },
    });
    if (existingId) {
      await Category.destroy({
        where: { id: targetId },
      });
      res.send({
        status: true,
        entity: "deleted",
      });
    } else {
      res.send({
        status: false,
        entity: "category does not exist",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

module.exports = {
  addCategory,
  deleteCategory,
  allCategory,
  updateCategory,
};
