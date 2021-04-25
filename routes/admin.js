var express = require('express');
var router = express.Router();

const { admin } = require("../controllers/adminController")

/* GET home page. */
router.get('/', admin);

module.exports = router;
