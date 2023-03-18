const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');  
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const secret = require('../../config/default.json');
const { check, validationResult } = require('express-validator');
const auth = require("../../middleware/auth");
const Topic = require('../../models/Topic');

const router = express.Router();

router.post('/', [
  check('name', 'Name is required').not().isEmpty(), 
  check('email', 'Please provide a valid email').isEmail(), 
  check('password', 'Password must be at least 5 characters long').isLength({ min: 5 }) 
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { 
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const avatar = gravatar.url(email, { 
      s: '200',
      r: 'pg',
      d: 'mm'
    });
    
    const salt = await bcrypt.genSalt(10); 
    user = new User({ 
      name,
      email,
      avatar,
      password
    });
    user.password = await bcrypt.hash(password, salt); 

    await user.save();
    const payload = { user: { id: user._id } };

    const token = jwt.sign(payload, secret.jwtSecret, {
      expiresIn: "1h"
    }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

router.get('/', auth , async (req, res) => {

  try {
    const user = await User.findById(req.user.id).select(["name","avatar"]);
    res.status(200).json(user);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

router.get('/topic', auth , async (req, res) => {

  try {
    const user = await User.findById(req.user.id).select('topic');
    const topics = await Topic.find({ _id: { $in: user.topic } }).select('title detail date');
    res.status(200).json(topics);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});


module.exports = router;



