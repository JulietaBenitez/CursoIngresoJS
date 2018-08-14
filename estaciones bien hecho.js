function mostrar()

{
var estacion;
var temperatura;
var mensaje;

estacion = prompt('Ingrese estación');
temperatura= parseInt(prompt('Ingrese la temperatura'));

switch (estacion) 
{
	case 'invierno':
		if (temperatura >= 1 && temperatura <= 5)
			mensaje = "Qué fresquete";
		break;
	case 'primavera':
		if (temperatura > 32)
			mensaje = "Es un horno";
		else if (temperatura > 20)
			mensaje = "Qué calorcito";
		break;
	case 'otoño':
		if (temperatura === 15)
			mensaje = "Está lindo";
		else if (temperatura > 15 && temperatura < 21)
			mensaje = "Está re bueno";
		break;
	case 'verano':
		if (temperatura > 32)
			mensaje = "Es un horno";
		else if (temperatura > 20)
			mensaje = "Qué calorcito";
		break;
	default:
		
}




}
