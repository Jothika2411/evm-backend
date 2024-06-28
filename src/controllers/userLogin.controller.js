import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'; 

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.status(200).json({ 
      message: "User logged in successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email
      }
    })} catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const LoginController = {
  login,
};
