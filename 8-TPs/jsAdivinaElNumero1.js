/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
 numeroSecreto= Math.floor (Math.random()*100 +1);
 
	contadorIntentos= 0

}

function verificar()
{
	var numeroIngresado; 
 contadorIntentos= contadorIntentos  +1;
	intentos.value= contadorIntentos;
	numeroIngresado= document.getElementById("numero").value;

	if (numeroIngresado==numeroSecreto){
		alert("genio lolograste en el intento "  +  contadorIntentos ); 

	}
  else 
  	if (numeroIngresado<numeroSecreto){
  	alert("te falta"); 
  	
  	}
  	else {
		alert ("¡Te pasaste!");
	}
}