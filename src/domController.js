const domController = (() => {
    const playerBoardEl = document.getElementById('player-board');
    const enemyBoardEl = document.getElementById('enemy-board');
    const messageEl = document.getElementById('message');

    function renderBoards(human, computer) {
        renderBoard(playerBoardEl, human.gameboard, true);
        renderBoard(enemyBoardEl, computer.gameboard, false);
    }
})