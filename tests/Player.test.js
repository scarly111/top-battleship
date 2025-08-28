const Player = require('../src/Player');

describe('Player', () => {
  test('Player has its own gameboard', () => {
    const player = new Player('real');
    expect(player.gameboard).toBeDefined();
  });

  test('Player can attack opponent gameboard', () => {
    const player1 = new Player('real');
    const player2 = new Player('real');

    player2.gameboard.placeShip(1, 0, 0);
    const result = player1.attack(player2, 0, 0);
    expect(result).toBe(true); // hit
    expect(player2.gameboard.allShipsSunk()).toBe(true);
  });

  test('Player cannot attack the same spot twice', () => {
    const player1 = new Player('real');
    const player2 = new Player('real');

    player1.attack(player2, 1, 1);
    expect(() => player1.attack(player2, 1, 1)).toThrow(
      'This coordinate was already attacked'
    );
  });

  test('Computer can make random attacks', () => {
    const computer = new Player('computer');
    const opponent = new Player('real');

    opponent.gameboard.placeShip(1, 0, 0);
    const result = computer.randomAttack(opponent);
    expect(typeof result).toBe('boolean'); // hit or miss
  });
});
