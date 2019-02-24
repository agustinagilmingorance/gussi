function mostrar()
{
	var nota;

	nota= Math.floor(Math.random()*10)+1;

	if (nota <=10 && nota >=9){
		document.write("exelent"); 
	}

	if (nota<=4){
		document.write("vamos, la proxima se puede");
	}

	if (nota>=5 && nota<=8){
		document.write("aprobo");
	}
}//FIN DE LA FUNCIÓN




