/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto= Math.floor (Math.random()*100 +1);
 
	contadorIntentos= 0
//Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{
	
	var numeroIngresado; 
    contadorIntentos= contadorIntentos +1;
	intentos= document.getElementById("intentos").value;
	numeroIngresado= document.getElementById("numero").value;
	
	while (contadorIntentos==1 && numeroSecreto > numeroIngresado)
	{
		
	}	
}