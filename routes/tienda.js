var express = require('express');
var router = express.Router();

const { tienda } = require("../controllers/tiendaController")

/* GET home page. */
router.get('/', tienda);

module.exports = router;/*  */