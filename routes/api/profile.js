const express = require('express');
const router = express.Router();

// @route     GET /api/posts
// @desc      individual user profile
// @access    Public
router.get('/', (req, res) => res.json({ msg: "profiles works"}));

module.exports = router;