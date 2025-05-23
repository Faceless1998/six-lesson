const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { name, surname, username, password, mail, year, phone } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({ message: "All Fields required" });
  }

  const existsUser = await User.findOne({ mail }, { username });
  if (existsUser) {
    return res.status(400).json({ message: "You Already Exist" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      surname,
      username,
      password: hashedPassword,
      mail,
      year,
      phone,
    });

    res.status(201).json({ message: "Registration successful", user });
  } catch (err) {
    res.status(500).json({ message: "Registration error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, username: user.username, admin: user.admin },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};
