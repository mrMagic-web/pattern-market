const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();

// Load profile model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route     POST /api/profile
// @desc      POST create or update user data
// @access    Private
router.post('/',passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profileFields = {};
    profileFields.user = req.user.id;

    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.status) profileFields.status = req.body.status;
    if(req.body.bio) profileFields.bio = req.body.bio;
    
    if(typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    profileFields.social = {};
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({user: req.user.id})
      .then(profile => {
        if(profile) {
          // Update profile
          Profile.findOneAndUpdate({user: req.user.id}, { $set: profileFields }, {new: true})
            .then(profile => res.json(profile));
        } else {
          // Create profile
          // Check if handle exists
          Profile.findOne({ handle: profileFields.handle})
            .then(profile => {
              if(profile) {
                errors.handle = "That handle already exists";
                res.status(400).json(errors);
              }
              // Save profile
              new Profile(profile).save().then(profile => res.json(profile));
            })
        }
      })
  }
);

module.exports = router;