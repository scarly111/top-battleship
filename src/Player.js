const Gameboard = require('./Gameboard');

class Player {
    constructor(type = 'real', size = 10) {
        this.type = type; // "real" | "computer"
        this.gameboard = new Gameboard(size);
        this.attacksMade = [];
    }

    attack(opponent, x, y) {
        // check if attack already made
        if (this.attacksMade.some(pos => pos[0] === x && pos[1] === y)) {
            throw new Error('This coordinate was already attacked');
        }

        this.attacksMade.push([x, y]);
        return opponent.gameboard.receiveAttack(x, y);
    }
    
    randomAttack(opponent) {
        if (this.type !== 'computer') {
            throw new Error('Only computer players can make random attacks');
        }

        let x, y;
        do {
            x = Math.floor(Math.random() * this.gameboard.size);
            y = Math.floor(Math.random() * this.gameboard.size);
        } while (this.attacksMade.some(pos => pos[0] === x && pos[1] === y));

        return this.attack(opponent, x, y);
    }
}

module.exports = Player;

