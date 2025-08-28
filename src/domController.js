const domController = (() => {
    const playerBoardEl = document.getElementById('player-board');
    const enemyBoardEl = document.getElementById('enemy-board');
    const messageEl = document.getElementById('message');

    function renderBoards(human, computer) {
        renderBoard(playerBoardEl, human.gameboard, true);
        renderBoard(enemyBoardEl, computer.gameboard, false);
    }

    function renderBoard(container, gameboard, isPlayer) {
        container.innerHTML = '';
        for (let y = 0; y < gameboard.size; y++) {
            for (let x = 0; x < gameboard.size; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                const item = gameboard.board[y][x];

                if (isPlayer) {
                    if (item) cell.classList.add('ship');
                } else {
                    if (item && item.hits > 0) {
                        cell.classList.add('hit');
                    }
                }

                // Missing shots
                if (gameboard.missedAttacks.some(pos => pos[0] === x && pos[1] === y)) {
                    cell.classList.add('miss');
                }

                // Dataset for enemy
                if (!isPlayer) {
                    cell.dataset.x = x;
                    cell.dataset.y = y;
                }

                container.appendChild(cell);
            }
        }
    }
})
