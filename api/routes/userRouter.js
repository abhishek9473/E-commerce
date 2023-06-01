const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { authUser, authAdmin } = require("../middleware/auth");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/users" here       |<----######
// //               -----------------------------------------------
// // example :: https://localhost:3000/users/...

userRouter.get("/", authAdmin, (req, res) => {
  const name = req.userNameByToken;
  const role = req.userRole;
  res.send({
    status: true,
    data: "you are a valid user",
    role: role,
    entity: name,
  });
});

module.exports = userRouter;


// this file is not in use