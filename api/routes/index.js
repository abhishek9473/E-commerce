const express = require("express");
const app = express.Router();
const loginController = require("../controllers/loginController");

// //              //-----------------------------------------------\\
// //  ######---->||      All router start from "/" (home) here      ||<----######
// //              \\-----------------------------------------------//

// // example :: https://localhost:3000/...

app.get("/", (req, res) => {
  console.log(" hello");
  res.send("hello this is API homepage , welcome");
});

app.post("/signup", loginController.addUser);
app.post("/login", loginController.loginUser);
app.post("/loginAdmin", loginController.loginAdmin);

app.use("/category", require("./categoryRouter"));
app.use("/product", require("./productRouter"));
app.use("/viewCart", require("./cartRouter"));
app.use("/userOrder", require("./userOrderRouter"));
app.use("/orderHistory", require("./orderHistoryRouter"));

module.exports = app;
