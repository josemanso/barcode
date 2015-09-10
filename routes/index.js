var express = require('express');
var router = express.Router();

//controlador barcode
var barcodeController = require('../controllers/barcode_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Barcode' });
});

router.get('/barcodes/codigo', barcodeController.codigo);
router.get('/barcodes/barras', barcodeController.barras);

module.exports = router;
