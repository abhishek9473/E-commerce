const {
  UserOrder,
  OrderDetail,
  Product,
  Category,
} = require("../models/index.js");

const allOrders = async (req, res) => {
  const targetUserId = req.userIdByToken;
  try {
    const allOrdersData = await OrderDetail.findAll({
      attributes: { exclude: ["orderId"] },
      include: [
        {
          model: UserOrder,
          where: {
            userId: targetUserId,
          },
          attributes: ["paymentMode"],
        },
        {
          model: Product,
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "sellingPrice",
              "quantity",
              "mrp",
            ],
          },
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
      entity: allOrdersData,
    });
  } catch (error) {
    res.send({
      status: false,
      entity: error,
    });
  }
};

module.exports = {
  allOrders,
};
