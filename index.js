const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require("dotenv");
const connectMongoDB = require("./src/libs/mongoose/mongooDb");
const User = require("./src/models/userModel");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());

connectMongoDB();

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
  });

  return res.status(200).json(user);
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = req.body.password === user.password;
      if (result) {
        res.render("secret");
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
