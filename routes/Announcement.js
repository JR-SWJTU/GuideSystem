var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Information = require('../models/Information').Information;

router.get('/mainPage/announcement', function(req, res) {
	res.render('foreground/announcement', { title: '服务公告' });
});


module.exports = router;
