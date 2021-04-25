var express = require('express');
var router = express.Router();

const { novedades } = require("../controllers/novedadesController")

/* GET home page. */
router.get('/', novedades);

module.exports = router;