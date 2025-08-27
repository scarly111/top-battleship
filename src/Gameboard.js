const Ship = require('./Ship');

class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.ships = [];
        this.missedAttacks = [];
        this.board = Array(size).fill(null).map(() => Array(size).fill(null)); // 10x10
    }
}