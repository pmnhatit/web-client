var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('men', { title: 'Thời trang nam' });
});

module.exports = router;