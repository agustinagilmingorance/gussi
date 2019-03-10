function mostrar()
{
	 var sexo=prompt("ingrese su sexo(f o m)"); 
	 var nota=0;
	 var promedios; 
	 var contador =0;
	 var acumulador=0;
	 
	 var mini, sexoMin;
	 var totalDevarones=0;

	 for (contador=0; contador<5; contador++)
	 {
	 	nota= prompt("ingrese su nota");
	 	nota= parseInt(nota);

	 	while(nota<0||nota >10)
	 	{
	 		alert("error nota no valida, porfavor reingrese ");
	 		nota= parseInt(prompt("ingrese su nota"));
	 	}
	 	sexo= prompt("ingrese su sexo ");

	 	while(sexo!= "f" && sexo!= "m")
	 	{
	 		alert("error este no es un sexo valido");
	 		sexo= prompt("ingrese su SEXO");
	 	}
	 	acumulador= acumulador+ nota;
	 	if (contador==0 || nota < mini)
	 	{
	 		mini= nota;
	 		sexoMin= sexo;
	 		flag++;
	 	}
	 	if (sexo=="m")
	 	{
	 		totalDevarones++;
	 	}

	}	 	 document.write  (" su promedio fue de " + (acumulador/5) + "la nota mas baja fue de " + mini+ "y del sexo " + sexoMin+ "y la nota de varones " + totalDevarones) ;
}