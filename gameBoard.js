const Gameboard = (() => {
    let board = Array(9).fill(null);
    
    const getBoard = () => board;
    
    const makeMove = (index, player) => {
        if (board[index] === null) {
            board[index] = player;
            return true;
        }
        return false;
    };
    
    const reset = () => {
        board = Array(9).fill(null);
    };
    
    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        for (let combo of winningCombos) {
            if (board[combo[0]] && 
                board[combo[0]] === board[combo[1]] && 
                board[combo[0]] === board[combo[2]]) {
                return board[combo[0]];
            }
        }
        
        if (board.every(cell => cell !== null)) {
            return 'tie';
        }
        
        return null;
    };
    
    return { getBoard, makeMove, reset, checkWinner };
})();
