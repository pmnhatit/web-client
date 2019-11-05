var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('infoShip', { title:'Thông tin giao hàng' });
});

module.exports = router;