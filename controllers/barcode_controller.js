//controlador barcode

var code39 = require('../lib/code39N');


exports.create = function(req, res) {
  // nuevo barcode //la información del imput

  var barcode = req.query.barcode;// GET
  //ahora dibujamos
  console.log("barcode ="+ barcode);
  var esperar = barcode.length;
  var esp = 0;//un wait
  if ( esperar<5){
    esp = 1500;
  }else {esp = 2500;}
   var img = code39(barcode);
 
 //aqui la espera / wait
  function sleep(milliSeconds) {  
    // obten la hora actual
    var startTime = new Date().getTime();
    // atasca la cpu
    while (new Date().getTime() < startTime + milliSeconds); 
  }

  sleep(esp);
  console.log("barcodeespara ="+ esp);
  res.render('imagen', {
    title: 'Barcode 39',
    tituloBody:'*'+barcode.toUpperCase() + '*',
    section: '<img src="/images/barrasN.jpg" width=auto heigth=auto ALT="imagen">'});
  //res.send('<img src="/images/barrasN.jpg" width=auto heigth=auto ALT="imagen"> ');
  //);  
};