const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const { authUser, authAdmin } = require("../middleware/auth");

// //               -----------------------------------------------
// //   ######---->|     All router start from "/category" here    |<----######
// //               -----------------------------------------------

// // example :: https://localhost:3000/category/...

categoryRouter.post("/add", authAdmin, categoryController.addCategory);
categoryRouter.get("/all", categoryController.allCategory);
categoryRouter.put("/update/:id", authAdmin, categoryController.updateCategory);
categoryRouter.delete(
  "/delete/:id",
  authAdmin,
  categoryController.deleteCategory
);

module.exports = categoryRouter;
