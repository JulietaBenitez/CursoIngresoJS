function mostrar()
{
	var dia;
	var mensaje;
	dia = prompt('Ingrese un dia de semana');

switch(dia) 
{
	case 'sabado':
	case 'domingo':
		mensaje = "Buen finde";
		break;
	case 'lunes':
	case 'martes':
	case 'miercoles':
	case 'jueves':
	case 'viernes':
		mensaje = "A trabajar";
		break;
	default:
			mensaje = "Ha ingresado un dia no valido";	
}
alert (mensaje);

}
