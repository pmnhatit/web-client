var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('forgetPass', { title: 'Quên mật khẩu' });
});

module.exports = router;
