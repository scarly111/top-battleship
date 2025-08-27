const Ship = require('./Ship');

class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.ships = [];
        this.missedAttacks = [];
        this.board = Array(size).fill(null).map(() => Array(size).fill(null)); // 10x10
    }

    placeShip(length, startX, startY, direction = 'horizontal') {
        const ship = new Ship(length);

        const positions = [];
        for (let i = 0; i < length; i++) {
            let x = direction === 'horizontal' ? startX + i : startX;
            let y = direction === 'vertical' ? startY + i : startY;
        }

        if (x >= this.size || y >= this.size) {
            throw new Error('Ship placement out of bounds');
        }

        if (this.board[y][x] !== null) {
            throw new Error('Ship placement overlaps another ship');
        }

        positions.push([x, y]);

        //place the ship on the board
        positions.forEach(([x, y]) => {
            this.board[y][x] = ship;
        });

        this.ships.push({ ship, positions });
    }

    receiveAttack(x, y) {
        const target = this.board[y][x];

        if (target === null) {
            this.missedAttacks.push([x, y]);
            return false; // Miss
        } else {
            target.hit();
            return true; // Hit
        }
    }

    allShipsSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
}

module.exports = Gameboard