const GameController = (() => {
    let currentPlayer;
    let player1;
    let player2;
    let gameActive = false;
    
    const initialize = (p1Name = "Player 1", p2Name = "Player 2") => {
        player1 = Player(p1Name, "X");
        player2 = Player(p2Name, "O");
        currentPlayer = player1;
        gameActive = true;
        Gameboard.reset();
    };
    
    const getCurrentPlayer = () => currentPlayer;
    
    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
    const playTurn = (index) => {
        if (!gameActive) return false;
        
        if (Gameboard.makeMove(index, currentPlayer.marker)) {
            const winner = Gameboard.checkWinner();
            if (winner) {
                gameActive = false;
                return winner;
            }
            switchPlayer();
            return true;
        }
        return false;
    };
    
    const isGameActive = () => gameActive;
    
    return { initialize, getCurrentPlayer, playTurn, isGameActive };
})();
