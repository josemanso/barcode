//controlador barcode
//GET /barcodes/codigo
exports.codigo = function(req, res) {
  res.render('barcodes/codigo', {pregunta: 'Introduce código'});
};

//GET /barcodes/barras
exports.barras = function(req, res) {
  res.render('barcodes/barras', {respuesta: 'aquí una barras'});
};