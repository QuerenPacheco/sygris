/*
		Dado un array nxn, devuelve los elementos ordenados de fuera hacia dentro
	en espiral en el sentido de las agujas del reloj.

	Ejemplo:
	array = [[1,2,3,4],
			[5,6,7,8],
			[9, 10,11,12],
			[13,14,15,16]]
	snail(array) #=> [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

	Nota: El objetivo NO es ordenar los elementos de menor a mayor, sino recorrer
	la matriz en espiral.
	Nota: La matriz 0x0 se representa como [[]]
*/
const array = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

export default function snail(array) {
	const resultado = [];
	let modificador = -1;

	let i = 0;
	while (array.length) {
		if (modificador == -1) {
			if (i == 0) {
				resultado.push(...array.shift());
				modificador = 1;
			} else {
				resultado.push(array[i].shift());
				i += modificador;
			}
		} else {
			if (i == array.length - 1) {
				resultado.push(...array.pop().reverse());
				modificador = -1;
			} else {
				resultado.push(array[i].pop());
			}
			i += modificador;
		}
	}
}
