<?php

namespace Cbi\Tests;
use \PHPUnit\Framework\TestCase;

/**
 *
 */
class PruebaTest extends TestCase
{

	public function testFrameworkConfigured()
	{
		$this->assertTrue(true);
	}

	public function testTresEnRaya()
	{
		//gana 1
		$board1 = [
			[1, 1, 1],
			[2, 2, 0],
			[0, 0, 0]
		];

		$ganador = boardState($board1);
        $this->assertEquals(1, $ganador);

		//empate
		$board2 = [
			[2, 1, 2],
			[2, 1, 1],
			[1, 2, 2]
		];

		$ganador = boardState($board2);
        $this->assertEquals(0, $ganador);

		//gana 2
		$board3 = [
			[2, 2, 1],
			[2, 1, 2],
			[2, 1, 1]
		];

		$ganador = boardState($board3);
        $this->assertEquals(2, $ganador);

		//incompleto
		$board4 = [
			[1, 2, 1],
			[1, 0, 2],
			[2, 1, 0]
		];

		$ganador = boardState($board4);
        $this->assertEquals(-1, $ganador);
	}
}
