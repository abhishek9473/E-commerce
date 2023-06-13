const { Cart } = require("../models/index.js");
const { Product } = require("../models/index.js");
const { Category } = require("../models/index.js");

const viewCart = async (req, res) => {
  try {
    const userId = req.userIdByToken;
    if (userId) {
      let data = await Cart.findAll({
        where: { userId: userId },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: Product,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: [
              {
                model: Category,
                attributes: ["categoeryName"],
              },
            ],
          },
        ],
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

const checkInCart = async (req, res) => {
  try {
    const targetUserId = req.userIdByToken;
    const targetProductId = req.body.productId;
    const product = await Cart.findOne({
      where: {
        userId: targetUserId,
        productId: targetProductId,
      },
    });

    if (product) {
      res.send({
        status: true,
        entity: "product aleray in cart",
      });
    } else {
      res.send({
        status: false,
        entity: "product mot in cart",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const addProductInCart = async (req, res) => {
  try {
    const userId = req.userIdByToken;
    const { productId } = req.body;
    const numberOfProducts = 1;
    const product = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    });
    if (product) {
      const updateProduct = await Cart.update(
        {
          productQty: product.productQty + 1,
        },
        {
          where: {
            id: product.id,
          },
        }
      );
      res.send({
        status: true,
        entity: "item added sucessfully",
      });
    } else {
      const newProduct = await Cart.create({
        userId: userId,
        productId: productId,
        productQty: numberOfProducts,
      });

      res.send({
        status: true,
        entity: "item added sucessfully",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const updateProductQty = async (req, res) => {
  try {
    const targetId = req.params.id;
    const newQty = req.body.newQty;
    const updated = await Cart.update(
      {
        productQty: newQty,
      },
      {
        where: {
          id: targetId,
        },
      }
    );
    res.send({
      status: true,
      entity: "product updated",
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

const deleteProductInCart = async (req, res) => {
  try {
    const targetId = req.params.id;
    await Cart.destroy({
      where: { id: targetId },
    });
    res.send({
      status: true,
      entity: "Product removed",
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

module.exports = {
  viewCart,
  checkInCart,
  addProductInCart,
  updateProductQty,
  deleteProductInCart,
};
