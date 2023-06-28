const express = require("express");
const userOrderRouter = express.Router();
const userOrderController = require("../controllers/userOrderController");
const { authUser } = require("../middleware/auth");

//               -----------------------------------------------
//   ######---->|     All router start from "/userOrder" here    |<----######
//               -----------------------------------------------

// example :: https://localhost:3000/userOrder/...

userOrderRouter.post("/addOrder", authUser, userOrderController.createOrder);

module.exports = userOrderRouter;
