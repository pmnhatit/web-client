var express = require('express');
var router = express.Router();

/* GET category listing. */
router.get('/', function(req, res, next) {
    res.render('category', { title:'Sản phẩm' });
});

module.exports = router;
