const DisplayController = (() => {
    const boardElement = document.querySelector('.board');
    const messageElement = document.querySelector('.message');
    const startButton = document.querySelector('.start-button');
    const player1Input = document.querySelector('.player1-input');
    const player2Input = document.querySelector('.player2-input');
    
    const renderBoard = () => {
        boardElement.innerHTML = '';
        const board = Gameboard.getBoard();
        
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.setAttribute('data-index', index);
            cellElement.textContent = cell || '';
            cellElement.addEventListener('click', () => handleCellClick(index));
            boardElement.appendChild(cellElement);
        });
    };
    
    const handleCellClick = (index) => {
        const result = GameController.playTurn(index);
        if (result === 'tie') {
            updateMessage("It's a tie!");
        } else if (result === 'X' || result === 'O') {
            const winner = GameController.getCurrentPlayer().name;
            updateMessage(`${winner} wins!`);
        } else if (result) {
            updateMessage(`${GameController.getCurrentPlayer().name}'s turn`);
        }
        renderBoard();
    };
    
    const updateMessage = (message) => {
        messageElement.textContent = message;
    };
    
    const initialize = () => {
        startButton.addEventListener('click', () => {
            const p1Name = player1Input.value || "Player 1";
            const p2Name = player2Input.value || "Player 2";
            GameController.initialize(p1Name, p2Name);
            updateMessage(`${p1Name}'s turn`);
            renderBoard();
        });
    };
    
    return { initialize, renderBoard };
})();