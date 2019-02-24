/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num;
var num2;
var result;
num1= document.getElementById ("numeroDividendo"). value;
num2= document.getElementById ("numeroDivisor"). value; 
num1= parseInt (num1);
num2= parseInt (num2);
result= num1 % num2; 
alert  ("el resto es " + result);
}
