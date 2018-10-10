const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateProfileInput = require('../../validation/profile');
const validateProductInput = require('../../validation/product');

const router = express.Router();

// Load profile model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route     GET /api/profile/all
// @desc      GET get all profiles
// @access    Public
router.get('/all', (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then( profiles => {
      if(!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors)
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles'}))
})


// @route     GET /api/profile/handle/:handle
// @desc      GET profile by handle
// @access    Public
router.get('/handle/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then( profile => {
      if(!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: 'there is no profile for this user'}))
})

// @route     GET /api/profile/user/:user_id
// @desc      GET profile by user ID
// @access    Public
router.get('/user/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then( profile => {
      if(!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: 'there is no profile for this user'}))
})

// @route     POST /api/profile
// @desc      POST create or update user data
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const {errors, isValid} = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.bio) profileFields.bio = req.body.bio;
    
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route     POST /api/profile/product
// @desc      POST add experiance to profile
// @access    Private
router.post('/product', passport.authenticate('jwt', { session: false } ), (req, res) => {
  const {errors, isValid} = validateProductInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const newProd = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        description: req.body.description
      }
      // Add to experiance aray
      profile.product.unshift(newProd);

      profile.save().then(profile => res.json(profile));
    })
})

// @route     Delete /api/product/:prod_id
// @desc      Delete product
// @access    Private
router.delete('/profile/product/:prod_id', passport.authenticate('jwt', { session: false } ), (req, res) => {

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const removeIndex = profile.product
        .map(item => item.id)
        .indexOf(req.params.prod_id)

        // splice out of an array
        profile.product.splice(removeIndex, 1);

        // save
        profile.save().then(profile => res.json(profile))
    }).catch(err => res.status(404).json(err))
})

// @route     Delete /api/profile
// @desc      Delete user and profile
// @access    Private
router.delete('/', passport.authenticate('jwt', { session: false } ), (req, res) => {

  Profile.findOneAndRemove({ user: req.user.id })
    .then( ()=> {
      User.findOneAndRemove({ user: req.user.id })
        .then(()=> res.json({ success: true}))
    })
    .catch(err => res.status(404).json(err))
})

module.exports = router;