const express = require("express");
const router = express.Router();

// @route     GET /api/products
// @desc      lists all products
// @access    Public
router.get("/", (req, res) => res.json({ msg: "products works" }));

module.exports = router;
