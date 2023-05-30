require("dotenv").config();

const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.User;
const secret = process.env.JWT_SECRET;

const addUser = async (req, res) => {
  try {
    const { userName, password, email, number } = req.body;
    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        name: userName,
        password: hashedPassword,
        email: email,
        number: number,
      });

      res.send({
        status: true,
        entity: newUser,
      });
    } else {
      res.send({
        status: false,
        entity: "email already exist",
      });
    }
  } catch (error) {
    res.send({
      status: false,
      entity: "error in adding user",
      error,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
      const token = jwt.sign(
        { id: user.id, email: user.email, name: user.name, role: user.role },
        secret
        // {expiresIn : "25s"}
      );
      res.send({
        status: true,
        entity: {
          email: email,
          token,
        },
      });
    } else {
      res.send({
        status: false,
        entity: "password inncorrect",
      });
    }
  } else {
    res.send({
      status: false,
      entity: "user not found",
    });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    const firstName = user.name.split(' ').shift();
    if (user.role === "admin") {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.name, role: user.role },
          secret
          // {expiresIn : "25s"}
        );
        res.send({
          status: true,
          entity: {
            email: user.email,
            name: firstName,
            token,
          },
        });
      } else {
        res.send({
          status: false,
          entity: "password inncorrect",
        });
      }
    } else {
      res.send({
        status: false,
        entity: "invalid email id",
      });
    }
  } else {
    res.send({
      status: false,
      entity: "user not found",
    });
  }
};
module.exports = {
  addUser,
  loginUser,
  loginAdmin,
};
