var express = require('express');
var  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { Value:'this about page' });
});

module.exports = router;
