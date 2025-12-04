const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserRegister = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error("UserRegister error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const UserLogin = async (req, res) => {
  try {
    const { email , password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "devsecret"
    );

    res.cookie("token", token, { httpOnly: true , secure : true , sameSite : 'None' });

    res.status(200).json({
      message: "User Loged in successfully",
      user: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
      token,
    });

  } catch (error) {
    console.error("UserLogin error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const UserLogout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully",
  });
};

module.exports = {
  UserRegister,
  UserLogin,
  UserLogout,
};
