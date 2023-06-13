const express = require("express");
const app = express.Router();
const loginController = require("../controllers/loginController");

// //              //-----------------------------------------------\\
// //  ######---->||      All router start from "/" (home) here      ||<----######
// //              \\-----------------------------------------------//

// // example :: https://localhost:3000/...

app.get("/", (req, res) => {
  console.log(" hello")
  res.send("hello this is zeytech API homepage , welcome");
});

app.post("/signup", loginController.addUser);
app.post("/login", loginController.loginUser);
app.post("/loginAdmin", loginController.loginAdmin);
// app.delete("/delete/:id", loginController.deleteUser);

app.use("/users", require("./userRouter"));
app.use("/category", require("./categoryRouter"));
app.use("/product", require("./productRouter"));
app.use("/viewCart", require("./cartRouter"));

module.exports = app;
