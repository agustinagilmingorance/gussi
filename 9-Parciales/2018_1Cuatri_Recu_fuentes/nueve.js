function mostrar()
{
    var animal;
    var temperatura;
    var peso;
    var tempPares=0;
    var tempImpares=0;
   
    var cantPos=0;
    var acumuladorPos=0;
    var flag=0;
    var sumaNeg=0;
    var minimo;
    var maximo;
    var pesoMax;
    var pesolMin;
    var promedio;

    do

    {

        animal = prompt("Ingrese un animal del zoologico");

        peso = parseInt(prompt("Ingrese peso del animal"));

        while(peso < 1 || peso >1000)

        {

            peso = parseInt(prompt("ERROR, Ingrese el peso entre 1 y 1000"));

        }
        while(temperatura<30||temperatura>30)
        {
        	temperatura=parseInt(prompt("ERROR, Ingrese una temperatura entre -30 y 30"))
      

        if()
        {

            //punto A

            if(peso%2==0)//es Par

            {

                pares++;

            }//Punto B

            else//es impar

            {

                impares++;

            }

        }

        //punto D

        if(temperatura>0)

        {

            cantPos++;

            acumuladorPos += numero;

            promedio = acumuladorPos/cantPos;

        }

        else

        {

            //punto E

            if(<0)

            {

                sumaNeg += numero;

            }

            else

            {

                //aca entra el cero pero no hacemos nada

            }

        }



        //punto F

        if(flag == 0 || minimo > peso)

        {

            minimo = peso;

            pesoMin = animal;
           
        }

        if(flag == 0  || maximo < peso)

        {

            maximo = peso;

            pesoMin = animal;
           
        }  



        flag = 1;

        seguir = prompt("Desea seguir?? S/N");

    }while(seguir == "S");





    //esto de abajo no se hace pero es muy largo meter todo en una linea, igual funciona jaja

    document.write("Pares: " + pares +

                   "</br>Impares"+ impares +

                   "</br>animales bajo cero:" + bajoCeros +

                   "</br>Promedio de animales: "+ promedio +

                   "</br>maxima temperatura: " + temperatura +

                   "</br>animal y peso del maximo:"+ maximo + " - " + pesoMax +

                   " </br>animal y peso del minimo: "+ minimo + " - " + pesoMin);
}
