function mostrar()
{
var edad,eCivil 
edad= document.getElementById("edad"). value;
edad= parseInt(edad);

eCivil= document.getElementById("estadoCivil"). value; 
if (edad <18 && eCivil !="Soltero"){
	alert("es muy pequeño para no ser soltero"); 

} 
}//FIN DE LA FUNCIÓN