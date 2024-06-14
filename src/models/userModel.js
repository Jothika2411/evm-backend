const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // fristName: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // mobile: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,
  // },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // employeeId: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,
  // },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
