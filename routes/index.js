var express = require('express');
var router = express.Router();


//controlador barcode
var barcodeController = require('../controllers/barcode_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Barcode' });
});

/* GET imagen */
router.get('/imagen', barcodeController.create);
module.exports = router;

