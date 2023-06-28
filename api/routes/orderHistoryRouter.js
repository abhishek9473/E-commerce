const express = require("express");
const orderHistoryrouter = express.Router();
const { authUser, authAdmin } = require("../middleware/auth");
const orderHistoryController = require("../controllers/orderHistoryController");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/orderHistory" here    |<----######
// //               -----------------------------------------------

// // example :: https://localhost:3000/orderHistory/...

orderHistoryrouter.get("/all", authUser, orderHistoryController.allOrders);

module.exports = orderHistoryrouter;
