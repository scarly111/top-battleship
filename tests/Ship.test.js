const Ship = require('../src/Ship');

describe('Ship', () => {
  test('Ship initializes with correct length and 0 hits', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
  });

  test('hit() increases hits', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
    ship.hit(); // hits should not exceed length
    expect(ship.hits).toBe(2);
  });

  test('isSunk() returns true when hits equal length', () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
