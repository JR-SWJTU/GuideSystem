var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

router.get('/mainPage/admissionNotice', function(req, res) {
	res.render('foreground/admissionNotice', { user : req.session.user});
});

module.exports = router;
