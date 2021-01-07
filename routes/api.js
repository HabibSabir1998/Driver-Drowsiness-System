const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middeware/auth");

const User = require("../models/userModel");

const Activity = require("../models/Activity");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, deviceId, phoneNumber } = req.body;

    //validate

    if (!email || !password || !passwordCheck || !deviceId)
      return res.status(400).json({ msg: "Not all field have been entered" });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 character long" });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists" });
    if (!phoneNumber) phoneNumber = null;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
      deviceId,
    });
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password, deviceId } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all field have been entered" });
    if (!deviceId) deviceId = email;

    const user = await User.findOne({
      $or: [{ email: email }, { deviceId: deviceId }],
    });

    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credential" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        deviceId: user.deviceId,
        //email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/users", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json(user);
});

//routes
router.get("/api", (req, res) => {
  Activity.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
