require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const authUser = (req, res, next) => {
  const authHeader = req.headers["x-access-token"];
  if (!authHeader) {
    return res.send({
      status: false,
      entity: "token missing",
    });
  }
  const token = authHeader;
  try {
    const decoded = jwt.verify(token, secret);
    req.userIdByToken = decoded.id;
    next();
  } catch (error) {
    return res.send({
      status: false,
      entity: "Invalid authorization token",
      error,
    });
  }
};

const authAdmin = async (req, res, next) => {
  // console.log("admin req", req.headers["x-access-token"]);
  const authHeader = req.headers["x-access-token"];
  if (!authHeader) {
    return res.send({
      status: false,
      entity: "token missing",
    });
  }
  const token = await authHeader;
  try {
    const decoded = jwt.verify(token, secret);

    if (decoded.role === "admin") {
      req.userIdByToken = decoded.id;
      req.userNameByToken = decoded.name;
      req.userRoleByToken = decoded.role;
      next();
    } else {
      res.send({
        status: false,
        entity: "you are user, not admin",
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      entity: "Invalid authorization token",
      error,
    });
  }
};

module.exports = {
  authUser,
  authAdmin,
};
