/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;	
	var resultado;

importe= document.getElementById ("importe"). value;

importe= parseInt (importe);

resultado= importe * 0.90; 
document.getElementById ("resultado"). value = resultado; 

}
	

