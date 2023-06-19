const { UserOrder } = require("../models/index.js");
const { OrderDetail } = require("../models/index.js");
const { Cart } = require("../models/index.js");

const createOrder = async (req, res) => {
  try {
    const targetUserId = req.userIdByToken;
    const { userId, totalProduct, cartPrice, status, paymentMode } =
      req.body.orderData;
    const cartItems = req.body.cartItems;

    if (targetUserId === userId) {
      const newOrder = await UserOrder.create({
        userId: userId,
        totalProduct: totalProduct,
        cartPrice: cartPrice,
        status: status,
        paymentMode: paymentMode,
      });

      let checkEntry = true;
      if (newOrder) {
        await Promise.all(
          cartItems.map((item) => {
            const orderItem = OrderDetail.create({
              orderId: newOrder.id,
              productId: item.productId,
              productQty: item.productQty,
              sellingPrice: item.Product.sellingPrice,
            });

            orderItem ? null : (checkEntry = false);
          })
        );
      }

      if (checkEntry) {
        const ClearCart = await Cart.destroy({
          where: { userId: targetUserId },
        });
        res.send({
          status: true,
          entity: "new order created",
        });
      } else {
        res.send({
          status: false,
          entity: "error in clear cart",
        });
      }
    } else {
      res.send({
        status: false,
        entity: "id mismatch in adding order in table",
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
  createOrder,
};
