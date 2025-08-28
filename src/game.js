import Player from './Player.js';
import domController from './domController.js';


function startGame() {
    // Players
    const human = new Player('real')
    const computer = new Player('computer')

    // Static placement
    human.gameboard.placeShip(3, 0, 0, 'horizontal');
    human.gameboard.placeShip(2, 2, 3, 'vertical');

    computer.gameboard.placeShip(3, 5, 5, 'horizontal');
    computer.gameboard.placeShip(2, 7, 2, 'vertical');

    // First render
    domController.renderBoards(human, computer);

    // Player click events
    domController.bindEnemyBoardClicks((x, y) => {
        // Player attacks
        const hit = human.attack(computer, x, y);

        // Update boards
        domController.renderBoards(human, computer);

        // Is Game Over?
        if (computer.gameboard.allShipsSunk()) {
            domController.showWinner('You win!');
            return;
        }

        // Computers turn
        setTimeout(() => {
            computer.randomAttack(human);
            domController.renderBoards(human, computer);

            if (human.gameboard.allShipsSunk()) {
                domController.showWinner('Computer wins!');
            }
        }, 500);
    });
}

export default startGame;