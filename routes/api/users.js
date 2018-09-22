const express = require('express');
const router = express.Router();

// @route     GET /api/users
// @desc      user list
// @access    Private
router.get('/', (req, res) => res.json({ msg: "users works"}));

module.exports = router;