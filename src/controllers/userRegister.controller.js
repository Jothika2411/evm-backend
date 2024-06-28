import User from "../models/userModel.js";

const createUser = async (req, res, next) => {
  try {
    const payload = req.body;

    if (
      !payload.firstName ||
      !payload.lastName ||
      !payload.email ||
      !payload.mobile ||
      !payload.password ||
      !payload.employeeId
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({
      $or: [
        { email: payload.email },
        { mobile: payload.mobile },
        { employeeId: payload.employeeId },
      ],
    });

    if (existingUser) {
      return res
        .status(409)
        .json({
          error:
            "User with the same email, mobile, or employeeId already exists",
        });
    }

    const user = await User.create(payload);

    return res.status(201).json({ user });
  } catch (error) {
    console.error("Error in createUser:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ error: "Validation Error", details: error.message });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getUser:", error);

    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid User ID format" });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const RegisteredUserController = {
  createUser,
  getUser,
};
