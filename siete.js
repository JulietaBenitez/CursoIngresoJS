function mostrar()
{
var nota;
var edad;
var sexo;
var sumatoria = 0;
var sexoMasBaja;
var notaMasBaja = 10;
var varonMayorMayorSeis = 0;
var edadMasJoven = 1000;
var notaMasJoven;
var contador = 0;
var primeraMujer = 0;
var notaPrimeraMujer;
var edadPrimeraMujer;

while(contador < 2){
	//carga de datos y validacion
	nota = -1;
	while(nota < 0 || nota > 10)
		nota = parseInt(prompt('Ingrese nota:'));
	edad = parseInt(prompt('Ingrese edad:'));
	sexo = "x";
	while(sexo != "f" && sexo != "m")
		sexo = prompt('Ingrese sexo:');

	//promedio
	sumatoria = sumatoria + nota;
	//notaMasBaja	if(nota < notaMasBaja){
		notaMasBaja = nota;
		sexoMasBaja = sexo;
	}
	//varonesMayores18
	if(sexo = "m" && edad > 18 && nota > 6)
		varonMayorMayorSeis++;
	//sexoNotaMAsJoven
	if(edad < edadMasJoven){
		edadMasJoven = edad;
		notaMasJoven = nota;
	}

	//primeraMujer
	if(sexo = "f" && primeraMujer == 0){
		notaPrimeraMujer = nota;
		edadPrimeraMujer = edad;
		primeraMujer = 1;
	}
	contador++;
}

promedio = sumatoria/5;
Alert ("La nota mas baja es " + notaMasBaja + " del sexo " + sexoMasBaja + ". " + "La cantidad de varones mayores a 18, con nota superior a 6 es " + varonMayorMayorSeis + ". " + "El sexo y la nota del mas joven es " + edadMasJoven + " años " + notaMasJoven + ". " + "La edad de la primer mujer es de " + edadPrimeraMujer + " y su nota fue " + notaPrimeraMujer + ". El promedio de todas las notas fue " + promedio);
	


