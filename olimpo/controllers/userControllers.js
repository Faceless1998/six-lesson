const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

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

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "2d",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};

exports.forgetPassword = async (req, res) => {
  const { mail } = req.body;
  try {
    const user = await User.findOne({ mail });
    if (!user) return res.status(404).json({ message: "User Not Found" });

    const resetToken = crypto.randomBytes(32).toString("hex");

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    user.resetToken = resetToken;
    user.resetTokenExpire = Date.now() + 1000 * 60 * 5;
    await user.save();

    console.log(resetLink);

    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: "kakhidze.k",
        pass: "metiarmindaparoligitxrat",
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    });

    res.status(200).json({ message: "Password reset is sent to your mail" });
  } catch (err) {
    console.log("OK, next time bro!");
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpire: {$gt: Date.now()},
    });


    if(!user) return res.status(400).json({message: "Token Invalid or Expired"});

    
  } catch (err) {
    console.log(err);
  }

  user.resetToken = undefined;
  user.resetTokenExpire = undefined;
};
