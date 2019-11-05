var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('userProfile', { title: 'Thông tin tài khoản' });
});

module.exports = router;