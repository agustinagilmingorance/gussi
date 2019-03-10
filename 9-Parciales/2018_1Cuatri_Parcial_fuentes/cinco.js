function mostrar()
{ 
	var planeta;
	planeta = prompt("planeta");
	switch(planeta){
		
		case "Mercurio": 
		case "Venus":
			alert("Acá hace mas calor");
			break;
		case "Tierra":
			alert("Acá es donde vivimos"); 
			break;
		case "Marte":
		case "Jupiter":
		case "Saturno":
		case "Urano":
		case "Neptuno":
			alert ("Acá hace más frio");
			break;
		default: 
		 	alert("No es un planeta");
 	}

	 

}
