Código de barras

Creando un programa para generar un código barras, barcode 39

Para dibujar uso gm “GraphisMagick”
La codificación la hago en lib/code39N.
La imagen se guarda en public/images, y la salida en la vista imagen, la retardo, para que de tiempo a codificar y dibujar la nueva imagen.


Run: npm strart ;en port 3000 y nf start; foreman start, en port 5000

En heroku: https://barcode-39.herokuapp.com/

Información sobre barcode 39:
http://www.adams1.com/39code.html
http://www.makebarcode.com/specs/code_39.html

Barcode 39; Código 39 (también llamado Código 3 de 9) es un código de barras alfanumérico. El símbolo puede ser tan largo como sea necesario para almacenar los datos codificados. 

Esta diseñado para codificar las 26 letras mayúsculas (ABCDEFGHIJKLMNOPQRSTUVWXYZ), 10 dígitos (0123456789) y siete caracteres especiales (-.$/+% espacio).
El carácter de inicio es el asterisco (*) y es el mismo carácter que se usa al final. De esta forma este carácter NO puede ser incluido dentro de la codificación.


Cada carácter de datos codificados en un símbolo que está compuesto por 5 barras y 4 espacios para un total de 9 elementos. Cada barra o espacio es "ancha  wide" o "estrecha narrow" y 3 de los 9 elementos son siempre wide “anchos”. Eso es lo que le dio el código de su otro nombre - Código 3 de 9.

Al inicio y al final hay una zona “tranquila” y entre caracteres he puesto una zona “tranquila” muy pequeña.




