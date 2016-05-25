var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET demo page. */
router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Demo' });
});

/* GET mobile demo */
router.get('/mob', function(req,res,next){
	res.render('mob', { title: 'Fire it up'});
});

/* GET mobile demo */
router.get('/jumbo', function(req,res,next){
	res.render('jumbo', { title: 'Fire it up'});
});

module.exports = router;
