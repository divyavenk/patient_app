const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Patient = require("../models/Patient");
const router = express.Router();

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // Check for user existence
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).send("User not found");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Invalid credentials");
  }

  // Create and assign a token
  const token = jwt.sign(
    { _id: user._id },
    "WYfXVl0MzeCwbGpY0y9m5BT8fXYrcb8bEtmmTVY/CYU=",
    { expiresIn: "1h" }
  );
  const loginjson = "{'token': '" + token + "' }";
  res.header("auth-token", token).json(token);
});

router.post("/createpatient", async (req, res) => {
  console.log(req.body);
  const patient = new Patient(req.body);
  
  patient.save().then(form => res.json(form))
  .catch(err => res.status(400).json({error:'Unable to save form data', details: err}));
});

router.get("/gethashpassword", async (req, res) => {
  const hashpassword = await bcrypt.hash(req.query.password, 10);
  res.send(hashpassword);
});

module.exports = router;
