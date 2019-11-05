var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('single', { title:'Chi tiết đơn hàng' });
});

module.exports = router;