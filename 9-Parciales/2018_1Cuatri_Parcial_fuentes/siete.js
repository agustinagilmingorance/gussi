function mostrar()
{
	var sexo= prompt("ingrese su sexo(f o m)"); 
	var notas;
	var contador=0;
	var promedio;
	var acumulador=0;
	var flag=0;
	var min, sexomin;
	for (contador=0;contador<2; contador++)
	{
		notas= parseInt(prompt("ingrese su nota"));
		while (notas>10||notas<0)
		{
			alert("Error reingrese su nota");
			notas=parseInt(prompt("Ingrese su nota"));
		}
		sexo=prompt("Ingrese su sexo ");
		while(sexo!= "f" && sexo!="m")
		{
			alert("Error reingrese su sexo");
			sexo= prompt("Ingrese su sexo ");
		}
		acumulador= acumulador+notas;
		if(flag== 0 ||notas< min)
		{
			min=notas;
			sexomin= sexo;
			flag++;
		}
	}
	document.write("el promedio de las notas es "+ (acumulador/5)+ " La nota más baja es "+ min+" y el sexo " + sexomin );


}
	