var express = require('express');
var  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

const value = ["muhsin","adhil", "jaseel", "shemeem"];

const person={name:"muhsin", flows:{flow:"that was a good flow",flowof:"a river"}}

  res.render('index', { person});
});

module.exports = router;
