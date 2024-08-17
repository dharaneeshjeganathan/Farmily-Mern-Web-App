const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth=require("../middlewares/auth");

router.post("/", auth, cartController.createcart); // Fixing the reference to createcart

module.exports = router;
