function mostrar()
{
	var num1, num2, resul; 

	num1= prompt ("ingrese 1er operando");
	num2= prompt("ingrese 2do operando");

	if (num1==num2)
	{
		alert(num1 + num2);
	}
    else 
    {
    	num1= parseInt (num1);
    	num2= parseInt(num2);

    	if (num1>num2) 
    	{
    		alert (num1 - num2);
    	}     
        else 
        {
        	result= num1 + num2; 
        
	        if (result>10)
	        {
	        	alert("la suma es " + result +  "y supero el 10");	        
	        } 
	        else 
	        {
       	        alert (result);
            }
       }            
	}
}