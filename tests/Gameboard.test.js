const Gameboard = require('../src/Gameboard');

describe('Gameboard', () => {
  test('placeShip places a ship correctly', () => {
    const board = new Gameboard();
    board.placeShip(3, 0, 0, 'horizontal');
    expect(board.board[0][0].length).toBe(3); // Ship object exists
  });

  test('receiveAttack hits a ship', () => {
    const board = new Gameboard();
    board.placeShip(2, 0, 0, 'horizontal');
    const hitResult = board.receiveAttack(0, 0);
    expect(hitResult).toBe(true);
    expect(board.board[0][0].hits).toBe(1);
  });

  test('receiveAttack records missed attacks', () => {
    const board = new Gameboard();
    board.placeShip(2, 0, 0, 'horizontal');
    const missResult = board.receiveAttack(5, 5);
    expect(missResult).toBe(false);
    expect(board.missedAttacks).toContainEqual([5, 5]);
  });

  test('allShipsSunk returns true when all ships are sunk', () => {
    const board = new Gameboard();
    board.placeShip(1, 0, 0);
    board.receiveAttack(0, 0);
    expect(board.allShipsSunk()).toBe(true);
  });
});
