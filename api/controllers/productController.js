const { Product } = require("../models/index.js");

const addProduct = async (req, res) => {
  try {
    // const data = req.body;
    const {
      categoryId,
      modelName,
      brandName,
      mrp,
      sellingPrice,
      imageSrc,
      varient,
      specification,
      quantity,
    } = req.body;

    const newProduct = await Product.create({
      categoryId: categoryId,
      modelName: modelName,
      brandName: brandName,
      mrp: mrp,
      sellingPrice: sellingPrice,
      imageSrc: imageSrc,
      varient: varient,
      specification: specification,
      quantity: quantity,
    });

    res.send({
      status: true,
      entity: `new product ${newProduct.modelName} added sucessfully`,
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const allProducts = async (req, res) => {
  try {
    let data = await Product.findAll({
      // attributes: { exclude: ["createdAt", "updatedAt"] },
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

const ProductsByCategory = async (req, res) => {
  try {
    const targetCategoryId = req.params.id;
    // console.log("check", targetCategoryId);
    if (targetCategoryId) {
      let data = await Product.findAll({
        where: { categoryId: targetCategoryId },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.send({
        status: true,
        entity: data,
      });
    } else {
      res.send({
        status: false,
        entity: "id not found",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const singleProductbyId = async (req, res) => {
  try {
    const targetProductId = req.params.id;
    // console.log("check", targetCategoryId);
    if (targetProductId) {
      let data = await Product.findAll({
        where: { id: targetProductId },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.send({
        status: true,
        entity: data,
      });
    } else {
      res.send({
        status: false,
        entity: "id not found",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const targetId = req.params.id;
    const bodyId = req.body.id;
    console.log("database", targetId, bodyId);
    console.log("body", req.body);
    if (targetId == bodyId) {
      const targetProduct = await Product.findOne({
        where: { id: targetId },
      });
      if (targetProduct) {
        await Product.update(
          { ...req.body },
          {
            where: {
              id: targetId,
            },
            // returning: true,
          }
        );
        res.send({
          status: true,
          entity: "product updated",
        });
      } else {
        res.send({
          status: false,
          entity: "product not found",
        });
      }
    } else {
      res.send({
        status: false,
        entity: "id not match",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const targetId = req.params.id;
    const existingProduct = await Product.findOne({
      where: { id: targetId },
    });
    if (existingProduct) {
      await Product.destroy({
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
  addProduct,
  allProducts,
  updateProduct,
  deleteProduct,
  ProductsByCategory,
  singleProductbyId,
};
