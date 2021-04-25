const express = require('express');
var router = express.Router();

const {armaTuPecera} = require('../controllers/armaTuPeceraController')


/* GET home page. */
router.get("/", armaTuPecera)

module.exports = router;/*  */