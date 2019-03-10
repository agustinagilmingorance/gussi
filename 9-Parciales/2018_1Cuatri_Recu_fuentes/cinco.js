function mostrar()
{
 var dia;
 dia= prompt("ingresarDiaDeLaSemana");
  switch (dia){
  	case "Lunes":
  	case "Martes":
  	case "Miercoles":
  	case "Jueves":
  	case "Viernes":
  		alert("A trabajar!!");
  		break;
  	case "Sabado":
  	case "Domingo":
  		alert("Buen fin de semana");
  		break;
  }


}
