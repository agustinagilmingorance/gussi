function mostrar()
{
var edad; 
edad= document.getElementById("edad"). value;
edad= parseInt(edad);


if (edad>17){
	alert("es mayor de edad");
}
else {
	if (edad <13){
		alert("es niño");
	}

	else {
		alert("es adolecente");
	}


}
/*{
var edad; 
edad= document.getElementById("edad"). value,
edad= parseInt(edad);

if (edad >=17){
alert("es mayor de edad");
}
if (edad<12){
	alert("es menor de edad"); 

}
if (edad >= 13 && edad <= 17){
	alert("es un adolecente"); 

}
*/



}//FIN DE LA FUNCIÓN