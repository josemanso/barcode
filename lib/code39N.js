//function cod39() {
/*
 * generador- code39
 * codigo 39 -> bsbsbsbsb (barra/espacio)
 * ancho/wide =  1;  estrecho/narroe = 0;
 */

var gm = require('gm');

const bmap = {
	' ': [0,1,1,0,0,0,1,0,0],
	'$': [0,1,0,1,0,1,0,0,0],
	'%': [0,0,0,1,0,1,0,1,0],
	'*': [0,1,0,0,1,0,1,0,0], // Start/stop 
	'+': [0,1,0,0,0,1,0,1,0],
	'|': [0,1,0,0,0,0,1,0,1],
	'.': [1,1,0,0,0,0,1,0,0],
	'/': [0,1,0,1,0,0,0,1,0],
	'-': [0,1,0,0,0,0,1,0,1],
	'0': [0,0,0,1,1,0,1,0,0],
	'1': [1,0,0,1,0,0,0,0,1],
	'2': [0,0,1,1,0,0,0,0,1],
	'3': [1,0,1,1,0,0,0,0,0],
	'4': [0,0,0,1,1,0,0,0,1],
	'5': [1,0,0,1,1,0,0,0,0],
	'6': [0,0,1,1,1,0,0,0,0],
	'7': [0,0,0,1,0,0,1,0,1],
	'8': [1,0,0,1,0,0,1,0,0],
	'9': [0,0,1,1,0,0,1,0,0],
	'A': [1,0,0,0,0,1,0,0,1],
	'B': [0,0,1,0,0,1,0,0,1],
	'C': [1,0,1,0,0,1,0,0,0],
	'D': [0,0,0,0,1,1,0,0,1],
	'E': [1,0,0,0,1,1,0,0,0],
	'F': [0,0,1,0,1,1,0,0,0],
	'G': [0,0,0,0,0,1,1,0,1],
	'H': [1,0,0,0,0,1,1,0,0],
	'I': [0,0,1,0,0,1,1,0,0],
	'J': [0,0,0,0,1,1,1,0,0],
	'K': [1,0,0,0,0,0,0,1,1],
	'L': [0,0,1,0,0,0,0,1,1],
	'M': [1,0,1,0,0,0,0,1,0],
	'N': [0,0,0,0,1,0,0,1,1],
	'O': [1,0,0,0,1,0,0,1,0],
	'P': [0,0,1,0,1,0,0,1,0],
	'Q': [0,0,0,0,0,0,1,1,1],
	'R': [1,0,0,0,0,0,1,1,0],
	'S': [0,0,1,0,0,0,1,1,0],
	'T': [0,0,0,0,1,0,1,1,0],
	'U': [1,1,0,0,0,0,0,0,1],
	'V': [0,1,1,0,0,0,0,0,1],
	'W': [1,1,1,0,0,0,0,0,0],
	'X': [0,1,0,0,1,0,0,0,1],
	'Y': [1,1,0,0,1,0,0,0,0],
	'Z': [0,1,1,0,1,0,0,0,0]
};

const NARROW_BAR = 3;//20;//3;
const WIDE_BAR = 9;//n * 3
const QUIET_BAR = 30;// 10 * n
const INT = 3;// entre symbolos separamos 
//const SYM_LEN = 6 * NARROW_BAR + 3 * WIDE_BAR + QUIET_BAR;


//function crear() {
module.exports =function(barcode) {

	console.log("siquiera pasa por aquí??");

  /* solo una barra  +  un estacio + una barra */

  /*
  if (entrada.length === 0) {
    return  (new Error('Entrada nula');
  }

	*/


	var entrada = barcode;  
  	
 
  	//Ejemplo -ejemplo
	/*L = (C + 2)(3N + 6)X + (C + 1)I
    L = length of symbol (not counting quiet zone, dimension will be in mils)
    C = number of data characters
    X = X-dimension (width of the smallest element in mils.)
    N = wide-to-narrow multiple(use 3.0 if your code has a 3 to 1 ratio, etc.)
    I = intercharacter gap width, separaciion entre caracteres
    Quit espacio al inicio  y al final, espacio tranquilo. sin nada
    */

  	//Ancho y  alto
	var width = (entrada.length +2)*(6*NARROW_BAR + 3*WIDE_BAR)+ (entrada.length +1)*INT +2*QUIET_BAR;
  	var width1 = (entrada.length * 0.2 +0.5) * (3 / 0.011);
	console.log("longitud = " + width +"  longitud1 = " + width1);
  	var heigtn = width * 0.26;

  	entrada = '*' + entrada.toUpperCase() +'*';// añadimos Start/stop
  	console.log(entrada);


  	//var wQuotient = options.w / (options.data.length * SYM_LEN - QUIET_BAR);

  	//var nBarWidth = NARROW_BAR * wQuotient >> 0;
  	//var wBarWidth = WIDE_BAR * wQuotient >> 0;
 	//var qBarWidth = QUIET_BAR * wQuotient >> 0;

  
  	//vamos  a dibujar 
  	var img = gm(width, heigtn, "#ffffff"), //anco, alto, color,
	     count = 0,						// contador
	     pos = 0,						//posición
	     ch,							//codificación
	     w;								//ancho??/wide?? ¿que ancho ponemos?

	//img.stroke(options.barcolor, 1);//entorno, recorte
	img.stroke("#000000", 1);
	
	// inicialmente
	count =0;
	pos = QUIET_BAR;///espacio libre
	     
  	for(var k= 0; k< entrada.length; k++) {
  		//creo que falta un espacio aqui
  		
  		if (count > 0) {
  			pos += INT;// intercarácter
  		};
  		
  		//codificamos
  		ch = bmap[entrada[k]]  || bmap[' '];
		count = 1;

  		for(var j in ch) { //recorriendo el vector codigo
  			w = ch[j] ? WIDE_BAR : NARROW_BAR; // ej ch=1 entonces WiDe, sino Narrow

  			if( !(j % 2)) {  //impar , entonces barra, pintamos, sino sería espacio
  				for (var m = 0; m < w; m++) {
  					img.drawLine(pos+m, 0, pos +m, heigtn);
  				}

  			}

  			pos += w;
  		}
  	}
    
    //me falta el llevarlo a un dir local
    img.write("./public/images/barrasN.jpg", function(err) {
    	if(err) console.log("Hay un error" + err);
    	console.log("No error");
    });
    //.write("/path/to/brandNewImg.jpg", function (err) {
    	return console.log ("algo de retorno");
}