/*
	¡El GPS se ha roto y tenemos que llegar a un sitio!

	Por suerte, tienes un mapa y tu algoritmo sigue intacto. Eso sí, tu mapa es
	un poco	extraño: todas las intersecciones están etiquetadas con números enteros
	diferentes y las  carreteras que las conectan están etiquetadas con el tiempo
	que se tarda en recorrerlas expresado en minutos.

	Te encuentras en la intersección etiquetada como "start" y tu destino es la
	interescción etiquetada como "finish".

	Dispondrás del número total de intersecciones y un array de carreteras, cada
	una de ellas con las propiedades: "from", "to" (las interesecciones están
	etiquetadas con números enteros menores que el número de intersecciones) y
	"drivingTime". Las carreteras sólo pueden ser usadas para ir desde "from" a
	"to". No hay carreteras de doble sentido.

	Completa la función para que devuelva un array de intersecciones de la ruta
	más rápida desde "start" hasta "finish" (ambas incluidas).

	Si hay vairas rutas iguales, coge cualquiera. Si no hay rutas, devuelve null.

	Ejemplo:

	var roads = [
		{from: 0, to: 1, drivingTime: 5},
		{from: 0, to: 2, drivingTime: 10},
		{from: 1, to: 2, drivingTime: 10},
		{from: 1, to: 3, drivingTime: 2},
		{from: 2, to: 3, drivingTime: 2},
		{from: 2, to: 4, drivingTime: 5},
		{from: 3, to: 2, drivingTime: 2},
		{from: 3, to: 4, drivingTime: 10}
	];
	navigate(5, roads, 0, 4);
	// devolvería [0, 1, 3, 2, 4]. Tiempo más rápido is 5 + 2 + 2 + 5 = 14 minutes

*/

export default function navigate(numberOfIntersections, roads, start, finish) {

	function evaluate(routes) {
		const aux = [];
		routes.forEach(route => {
			if (isRouteFinished(route)) {
				aux.push(route);
			} else {
				const validRoads = roads.filter(road => route[route.length - 1] === road.from);
				validRoads.forEach(road => {
					if (!route.includes(road.to)) {
						const newRoute = [...route, road.to];
						newRoute[0] = newRoute[0] + road.drivingTime;
						aux.push(newRoute);

					}
				});
			}
		});
		return aux;
	}

	let routes = [[0, start]];
	const isRouteFinished = (route) => route[route.length - 1] === finish || route.length === numberOfIntersections + 1;// +1 porque el sumatorio del tiempo está en la posicion 0
	
	while (!routes.every(isRouteFinished)) {
		routes = evaluate(routes);
	}

	let time = Number.MAX_SAFE_INTEGER;

	routes.forEach(route => {
		if (route[0] < time) {
			time = route[0]
		}
	});

	return finalRoute = routes.find(route => route[0] === time).slice(1);
}
