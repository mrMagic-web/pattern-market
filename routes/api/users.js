const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require('../../config/keys');

const router = express.Router();

// Load user Model
const User = require("../../models/User");

// @route     GET /api/users/login
// @desc      Login user / Return JWT token
// @access    Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;  

  // Find user by email
  User.findOne({ email })
      .then(user => {
        //check for user
        if(!user) {
          return res.status(404).json({email: "User not found"})
        }
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(isMatch) {
              // User matched
              const payload = { id: user.id, userName: user.userName, avatar: user.avatar, firstName: user.firstName, lastName: user.lastName, info: user.info, title: user.title, email: user.email} // create JWT payload

              // Sign Token
              jwt.sign(payload, 
                keys.secretOrKey, 
                { expiresIn: 7200 }, 
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer'
                  })
              });
            } else {
              return res.status(400).json({password: "Wrong password"})
            }
          })
  })
})

// @route     GET /api/users/register
// @desc      Register user
// @access    Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm" // default image if none
      });
      const newUser = new User({
        userName: req.body.userName,
        password: req.body.password,
        avatar: avatar,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        info: req.body.info,
        title: req.body.title,
        email: req.body.email
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
