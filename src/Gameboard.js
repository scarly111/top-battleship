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
            const x = direction === 'horizontal' ? startX + i : startX;
            const y = direction === 'vertical' ? startY + i : startY;
        }

        if (x >= this.size || y >= this.size) {
            throw new Error('Ship placement out of bounds');
        }
    }
}