<?php
/*
	Vamos a crear un juego de tres en raya y necesitamos controlar el estado del
	tablero. Para ello, crearemos una función.

	Supongamos que el tablero viene en la forma de un array de 3x3, en el que
	el valor es 0 si la casilla está vacía, 1 si es una X y 2 si es una O, tal
	que así:

	[[0,0,1],
	 [0,1,2],
	 [2,1,0]]

	Lo que queremos es que nuestra función devuelva -1 si el tablero no está
	resuelto, 1 si han ganado las X, 2 si han ganado las O y 0 en caso de
	empate.

	Supondremos que el tablero que se pasa como entrada siempre es válido, dado
	que estamos dentro del contexto de nuestro juego.
*/
function boardState(array $board): int
{
	return comprobarGanador($board);
}
function comprobarGanador($board){
	$ceros = array_search(0, array_merge(...$board));
	$evaluaciones = $board;

	$arrayColumnas = array_map(null, ...$board);//Traspuesto, rotado 90º
	array_push($evaluaciones, ...$arrayColumnas);
	
	$diagonal1 = [$board[0][0], $board[1][1], $board[2][2]];
	$diagonal2 = [$board[0][2], $board[1][1], $board[2][0]];
	array_push($evaluaciones, $diagonal1);
	array_push($evaluaciones, $diagonal2);
	
	$aux = array_map("array_unique", $evaluaciones);
	for($i = 0; $i < count($aux); $i++){
		if(count($aux[$i]) == 1 && $aux[$i][0] != 0){
			return $aux[$i][0];
		}
	}
	return $ceros === false ? 0 : -1;
}


