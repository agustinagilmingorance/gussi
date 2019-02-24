/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var descuento;
	var totalBruto;
	var porcentajeDescuento;
	var marca;
	var totalConDescuento;
	var IIBB =0;
	var precioPorLampara= 35;
	var precioFinal;
	var precioDeCompra;

	cantidadDeLamparas= document.getElementById ("Cantidad").value;
	marca= document.getElementById('Marca').value;
	
	cantidadDeLamparas= parseInt(Cantidad);
	
	totalBruto= cantidadDeLamparas *35;

	if(cantidadDeLamparas >= 6)
	{
		porcentajeDescuento =  0.5;
	}
	else
	{
		if(cantidadDeLamparas == 5)
		{
			if(marca== "ArgentinaLuz")
			{
				porcentajeDescuento= 0.4;
			}
			else
			{
			  porcentajeDescuento= 0.3;
			}
		}
		else 
		{
			if (cantidadDeLamparas==4)
			{
				if (marca== "ArgentinaLuz" || marca== "FelipeLamparas")
				{
					porcentajeDescuento=   0.25;
				}
				else
				{
					precioDescuento=  0.20;
				}
			}
			else
			{
				if (cantidadDeLamparas== 3)
				{
					if(marca== "ArgentinaLuz")
					{
						porcentajeDescuento= 0.15;
					}
					else{
						porcentajeDescuento=  0.10;
					}
					if (marca == "FelipeLamparas")
					{
						porcentajeDescuento= 0.10;
					}
					else{
						porcentajeDescuento=  0.5;
					}
				}
			}
		}		
	}
	  precioDeCompra=precioPorLampara*cantidadDeLamparas;
 	 precioConDescuento=precioDeCompra*descuento;
 	 document.getElementById('precioDescuento').value=precioConDescuento;
 	 	if (precioConDescuento>=120)
 	 	{
 	 		ingresosBrutos=1.10;
 	 		precioFinal=precioConDescuento*ingresosBrutos;
 	 		aumento=precioConDescuento/10;
 	    	alert("Usted pago "+precioFinal+" de IIBB, siendo "+aumento+" el impuesto que se pago")
 	 	}
	}


	/*switch (marca)
	{
		case "FelipeLamparas":
		if(cantidadDeLamparas >= 5)
		{
			document.getElementById("Cantidad").value * 0.50;
			descuento=parseInt(prompt(descuento));
		}
		else(cantidadDeLamparas < 5){
			precioPorLampara;
		}
		break;

		case "ArgentinaLuz":
		break;
		case "JeLuz":
		break;

	}*/
   /*switch (cantidadDeLamparas)
   {
   	 case 5 :
   	 	if(marca== "ArgentinaLuz")
   	 	{
   	 			porcentajeDescuento=0.4;
   	 		}
   	 	else
   	 	{
   	 		porcentajeDescuento= 0.3;
   	 	}
   	 break;
   	 case 4:
   	 	if (cantidadDeLamparas==4)
			{
				if (marca== "ArgentinaLuz" || marca== "FelipeLamparas")
				{
					porcentajeDescuento= 0.25;
				}
				else
				{
					precioDescuento= 0.20;
				}

			}
   	 break;
   	 case 3:

   }*/
 

