var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/discover', function(req, res, next) {
res.render('discover', { title: 'Discover' });
});
router.get('/book', function(req, res, next) {
res.render('book', { title: 'Book' });
});
router.get('/mange', function(req, res, next) {
res.render('manage', { title: 'Manage' });
});
router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

module.exports = router;