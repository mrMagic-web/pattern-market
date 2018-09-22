const express = require('express');
const router = express.Router();

// @route     GET /api/posts
// @desc      user post list
// @access    Public
router.get('/', (req, res) => res.json({ msg: "posts works"}));

module.exports = router;