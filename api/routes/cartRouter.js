const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController");
const { authUser } = require("../middleware/auth");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/viewCart" here    |<----######
// //               -----------------------------------------------

// // example :: https://localhost:3000/viewCart/...

cartRouter.get("/", authUser, cartController.viewCart);
cartRouter.post("/checkProductInCart", authUser, cartController.checkInCart);
cartRouter.post("/addProduct", authUser, cartController.addProductInCart);
cartRouter.put("/updateCart/:id", authUser, cartController.updateProductQty);
cartRouter.delete(
  "/deleteItem/:id",
  authUser,
  cartController.deleteProductInCart
);

module.exports = cartRouter;
