const express = require("express");
const orderHistory = express.Router();
// const productController = require("../controllers/productController");
const { authUser, authAdmin } = require("../middleware/auth");
const orderHistoryController = require("../controllers/orderHistoryController");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/orderHistory" here    |<----######
// //               -----------------------------------------------

// // example :: https://localhost:3000/orderHistory/...

orderHistory.get("/all", authUser, orderHistoryController.allOrders);

module.exports = orderHistory;
