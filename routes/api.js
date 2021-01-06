const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middeware/auth");

const User = require("../models/userModel");

const Activity = require("../models/Activity");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    //validate

    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "not all field have been entered" });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "the password needs to be at least 5 character long" });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists" });
    if (!displayName) displayName = email;
    console.log(displayName);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "not all field have been entered" });

    const user = await User.findOne({ email: email });

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
        displayName: user.displayName,
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
//const User = require('../models/userModel')

//router.post('/api/token', async (req, res) => {
//	const user = new User(req.body)
//	try {
//		const token = await user.generateAuthToken()
//		res.send({ token })
//		console.log(token)

//		return token

//	} catch (error) {
//		throw error
//	}

//})

//routes
router.get("/api", (req, res) => {
  //const data = {
  //	name: "Habib",
  //	age: 20
  //}

  Activity.find({})
    .then((data) => {
      console.log("data", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
