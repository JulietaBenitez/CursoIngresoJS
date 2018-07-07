/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 	var numeroUno; 
 	var numeroDos;
 	var resultado;

 	resultado = 66;
 	numeroUno = document.getElementById('numeroUno').value;
 	numeroUno = parseInt (numeroUno);
 	numeroDos = document.getElementById('numeroDos').value;
 	numeroDos = parseInt (numeroDos);
 	resultado = numeroUno+numeroDos;

 	alert ("El resultado de la suma es " + resultado); 

/* "= ParseInt" : Sin el igual no funciona y siempre
devuelve numero */ 




}

