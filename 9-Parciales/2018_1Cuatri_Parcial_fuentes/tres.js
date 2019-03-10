function mostrar()
{
   var precio;
   var porcentaje;
   var precioFinal; 

   precio= prompt("ingrese precio");
   precio= parseInt(precio);
  
   porcentaje= prompt("ingrese porcentaje");
   porcentaje= parseInt(porcentaje);

    
   precioFinal =  precio - (precio*porcentaje/100);
  

  document.getElementById("elPrecioFinal").value = precioFinal ;


}
