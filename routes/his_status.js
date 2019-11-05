var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('his_status', { title: 'Lịch sử mua hàng' });
});

module.exports = router;