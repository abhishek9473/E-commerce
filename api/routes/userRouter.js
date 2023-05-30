const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const { authUser, authAdmin } = require("../middleware/auth");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/users" here       |<----######
// //               -----------------------------------------------
// // example :: https://localhost:3000/users/...

// userRouter.get("/",auth, userController.getAllUsers);

// userRouter.get("/", (req, res) => {
//   res.send("route without auth work");
// });
userRouter.get("/", authAdmin, (req, res) => {
  // userRouter.get("/",authUser, (req, res) => {
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
